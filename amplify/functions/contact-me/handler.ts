import { contactSchema } from '../../../src/forms/schemas'
import nodemailer from 'nodemailer'
import { Schema } from '../../data/resource'

export const handler: Schema['contactMe']['functionHandler'] = async (
  event
) => {
  const parsedBody = contactSchema.safeParse(event.arguments)

  if (!parsedBody.success) {
    return JSON.stringify({ error: parsedBody.error.message })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  const mailOptions = {
    from: parsedBody.data.emailAddress,
    to: 'tommoore.dev@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${parsedBody.data.name}\nEmail: ${parsedBody.data.emailAddress}\nMessage: ${parsedBody.data.message}`
  }

  const sendEmailResponse = await transporter.sendMail(mailOptions)

  transporter.close()

  if (sendEmailResponse.accepted) {
    return 'Email sent successfully'
  } else {
    return 'Email failed to send'
  }
}
