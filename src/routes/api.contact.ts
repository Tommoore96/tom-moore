import { createAPIFileRoute } from '@tanstack/start/api'
import { contactSchema } from 'forms/schemas'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
})

async function sendEmail(name: string, emailAddress: string, message: string) {
  const mailOptions = {
    from: emailAddress,
    to: 'tommoore.dev@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${emailAddress}\nMessage: ${message}`
  }

  return await transporter.sendMail(mailOptions)
}

export const APIRoute = createAPIFileRoute('/api/contact')({
  POST: async ({ request }) => {
    const body = contactSchema.safeParse(request.body)
    console.log('🚀 ~ POST: ~ body:', body)
    if (!body.success) {
      return new Response(JSON.stringify({ error: body.error.message }), {
        status: 400
      })
    }

    const sendEmailResponse = await sendEmail(
      body.data.name,
      body.data.emailAddress,
      body.data.message
    )
    if (sendEmailResponse.accepted) {
      return new Response('Email sent successfully', { status: 200 })
    } else {
      return new Response('Email failed to send', { status: 500 })
    }
  }
})
