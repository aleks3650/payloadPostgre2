import { getPayload } from 'payload'
import config from '@payload-config'
export type HttpMethod =
  | 'get'
  | 'connect'
  | 'delete'
  | 'head'
  | 'options'
  | 'patch'
  | 'post'
  | 'put'
import { Endpoint } from 'payload'

export const testAPI: Endpoint = {
  path: '/test',
  method: 'get',
  handler: async () => {
    return Response.json({ message: 'IT works!' })
  },
}

export const emailAPI: Endpoint = {
  path: '/email',
  method: 'get',
  handler: async (req) => {
    return Response.json({ message: `Email Works ${req}!` })
  },
}

export const SweetHeaderAPI: Endpoint = {
  path: '/sweet-header',
  method: 'get',
  handler: async () => {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const data = await payload.find({
      collection: 'header-sweets',
    })
    return Response.json({ data })
  },
}
