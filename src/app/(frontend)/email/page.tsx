'use client'
import { SendMail } from '@/actions/actions'
import { useActionState } from 'react'
const Page = () => {
  const [state, action, isPending] = useActionState(SendMail, null)

  return (
    <div className="home">
      <h1>Email page</h1>
      <form action={action}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">subject</label>
          <input type="text" id="subject" name="subject" required placeholder="subject" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">text</label>
          <textarea rows={10} id="text" name="text" required placeholder="Body of the mail" />
        </div>
        <button type="submit">send email</button>
      </form>
      {state && <p>{(state as { message: string }).message}</p>}
      {isPending && <p>Loading...</p>}
      <a className="admin" href="/">
        Go to main
      </a>
    </div>
  )
}

export default Page
