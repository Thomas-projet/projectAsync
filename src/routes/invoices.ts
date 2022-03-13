import { FastifyInstance } from 'fastify'
import { Invoice } from '../schemas/types/invoice'
import {renderToString} from 'react-dom/server'
import * as invoiceSchema from '../schemas/json/invoice.json'
import showInvoice from '../templates/invoices/show'

enum MIME_TYPES {
  HTML = 'text/html',
  JSON = 'application/json',
  PDF = 'application/pdf'
}

export async function invoicesRoutes (fastify: FastifyInstance) {
    fastify.route<{ Body: Invoice }>({
      method: 'POST',
      url: '/',
      schema: {
        body: invoiceSchema,
        response: { 200: invoiceSchema }
      },
      handler: async function (request, reply): Promise<Invoice> {
        switch (request.headers.accept) {
          case MIME_TYPES.JSON:
            return request.body;
      
          default:{
            const jsxElement = showInvoice(request.body)
            return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement))
          }
        }
      }
    })
  }
