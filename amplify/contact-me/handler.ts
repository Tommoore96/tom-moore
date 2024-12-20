import { contactSchema } from '../../src/forms/schemas';
import nodemailer from 'nodemailer'
import type { Handler } from 'aws-lambda';


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: 'tommoore.dev@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

async function sendEmail(name: string, emailAddress: string, message: string) {
  const mailOptions = {
    from: emailAddress,
    to: 'tommoore.dev@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${emailAddress}\nMessage: ${message}`
  }
  try {
    return await transporter.sendMail(mailOptions)
  } catch (error) {
    throw new Error('Failed to send email')
  }
}

export const contactMe: Handler = async (event, context) => {

  const parsedBody = contactSchema.safeParse(event.arguments)

  if (!parsedBody.success) {
    return new Response(JSON.stringify({ error: parsedBody.error.message }), {
      status: 400
    })
  }

  const sendEmailResponse = await sendEmail(
    parsedBody.data.name,
    parsedBody.data.emailAddress,
    parsedBody.data.message
  )

  if (sendEmailResponse.accepted) {
    return new Response('Email sent successfully', { status: 200 })
  } else {
    return new Response('Email failed to send', { status: 500 })
  }
}
