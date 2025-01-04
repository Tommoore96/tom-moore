import { contactSchema } from '../../../src/forms/schemas'
import nodemailer from 'nodemailer'
import { Schema } from '../../data/resource'

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

export const handler: Schema['contactMe']['functionHandler'] = async (
  event
) => {
  const parsedBody = contactSchema.safeParse(event.arguments)

  if (!parsedBody.success) {
    return JSON.stringify({ error: parsedBody.error.message })
  }

  const sendEmailResponse = await sendEmail(
    parsedBody.data.name,
    parsedBody.data.emailAddress,
    parsedBody.data.message
  )

  if (sendEmailResponse.accepted) {
    return 'Email sent successfully'
  } else {
    return 'Email failed to send'
  }
}
