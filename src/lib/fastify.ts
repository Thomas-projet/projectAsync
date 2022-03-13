import fastifyFactory from 'fastify'
import { invoicesRoutes } from '../routes/invoices'


export const fastify = fastifyFactory({ logger: true })
  .register(invoicesRoutes, { prefix: '/invoices' })
