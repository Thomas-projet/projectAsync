import { fastify } from "../../lib/fastify";
import * as faker from 'faker';

const payload = {
    customer:{
        name: faker.name.firstName(),
        address:{
            city: faker.address.city()
        }
    }
}

describe('/invoices', function () {
    describe('POST render', function () {
        it('should returns a JSON', async function () {
            const response = await fastify.inject({
                method: 'POST', 
                url:'/invoices',
                headers: {Accept: 'application/json'},
                payload: {}
            })
            //expect(response.statusCode).to.eq(200)
        })
    })
})