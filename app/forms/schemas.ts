import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  emailAddress: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Required' })
})

export type ContactSchema = z.infer<typeof contactSchema>
