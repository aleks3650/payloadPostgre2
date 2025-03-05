'use server'
import config from '@/payload.config'
import { getPayload } from 'payload'

export async function SendMail(prevState: any, formData: FormData) {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const subject = formData.get("subject")
    const textBody = formData.get("text")
    try {
        await payload.sendEmail({
            to: 'aleks3650@interia.pl',
            subject: subject as string,
            text: textBody as string,
        })
        return {
            success: true,
            message: "Email sent succesfully"
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}