export type HttpMethod = 'get' | 'connect' | 'delete' | 'head' | 'options' | 'patch' | 'post' | 'put';
import { Endpoint } from "payload";

export const testAPI: Endpoint = {
  path: '/test',
  method: 'get',
  handler: async () => {
    return Response.json({ message: 'IT works!' });
  },
};

export const emailAPI: Endpoint = {
  path: "/email",
  method: 'get',
  handler: async (req) => {
    return Response.json({ message: `Email Works ${req}!` })
  }
}