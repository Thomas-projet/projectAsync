import fastifyFactory from 'fastify'
import { invoicesRoutes } from '../routes/invoices'
import * as addressSchema from '../schemas/json/address.json'
import * as billerSchema from '../schemas/json/biller.json'
import * as customerSchema from '../schemas/json/customer.json'
import * as itemInvoiceSchema from '../schemas/json/item-invoice.json'

export const fastify = fastifyFactory({ logger: true })
  .addSchema(addressSchema)
  .addSchema(billerSchema)
  .addSchema(customerSchema)
  .addSchema(itemInvoiceSchema)
  .register(invoicesRoutes, { prefix: '/invoices' })
