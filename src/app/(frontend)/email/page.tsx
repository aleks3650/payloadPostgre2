import config from '@/payload.config'
import { getPayload } from 'payload'

const Page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  //   const email = await payload.sendEmail({
  //     to: 'aleks3650@interia.pl',
  //     subject: 'This is a test email',
  //     text: 'This is my message body',
  //   })
  return (
    <div className="home">
      <h1>Email page</h1>
      <button>send email</button>
      <a className="admin" href="/">
        Go to main
      </a>
    </div>
  )
}

export default Page
