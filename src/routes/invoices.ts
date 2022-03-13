import { FastifyInstance } from 'fastify'
import { Invoice } from '../schemas/types/invoice'
import * as invoiceSchema from '../schemas/json/invoice.json'


enum MIME_TYPES {
  JSON = 'application/json',
}

export async function invoicesRoutes (fastify: FastifyInstance) {
    fastify.route<{ Body: Invoice }>({
      method: 'POST',
      url: '/',
      schema: {
        body: invoiceSchema,
        response: { 200: invoiceSchema }
      },
      handler: async function (request, reply): Promise<String> {
        if(request.body.choice == "stone")
        {
          return "i chose leaf, i won !"
        }
        else if(request.body.choice == "leaf")
        {
          return "i chose leaf too, equality !"
        }
        else if(request.body.choice == "scissors")
        {
          return "i chose leaf, you won !"
        }
        else
            return "I did not understand your choice :c"
      }
    })
  }
