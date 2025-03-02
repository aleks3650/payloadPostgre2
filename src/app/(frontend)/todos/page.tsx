import config from '@/payload.config'
import Link from 'next/link'
import { getPayload } from 'payload'

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const data = await payload.find({
    collection: 'todos',
    limit: 10,
    sort: 'title',
  })
  return (
    <div className="home">
      <h1>Todos</h1>
      <Link href="/">
        <button>Todos</button>
      </Link>
      {data.docs.map((item, index) => (
        <div key={index} style={{ background: 'gray', padding: '5px' }}>
          <h2>{item.title}</h2>
          <h3>{item.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default page
