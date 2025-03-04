'use client'

import config from '@/payload.config'
import { getPayload } from 'payload'
export const EmailButton = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const sendEmail = async () => {
    await payload.sendEmail({
      to: 'aleks3650@interia.pl',
      subject: 'This is a test email',
      text: 'This is my message body',
    })
  }

  return <button onClick={sendEmail}>Wyślij email</button>
}
