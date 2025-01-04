import { Resend } from 'resend'

const resend = new Resend('re_123456789')

export default async function Send({
  name,
  from,
  message
}: {
  name: string
  from: string
  message: string
}) {
  const { data, error } = await resend.emails.send({
    // from: 'Acme <onboarding@resend.dev>',
    from,
    to: 'tommoore.dev@gmail.com',
    subject: 'Contract enquiry',
    html: `from: ${name}

    ${message}`
  })

  if (error) {
    return console.error({ error })
  }

  console.log({ data })
}
