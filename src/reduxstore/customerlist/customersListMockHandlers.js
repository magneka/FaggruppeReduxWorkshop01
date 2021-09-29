import { rest } from 'msw'
import faker from 'faker'

const getFakeCustmoers = () => {
    const custArr = []
    for (let index = 0; index < 10; index++) {
        custArr.push({
            id: index,
            name: faker.company.companyName(),
            ceo: faker.name.findName()
        })
    }
    return custArr
}

export const customersListMockHandlers = [

    rest.get('/customerlist', (req, res, ctx) => {
        return res(
            ctx.json(getFakeCustmoers())
        )
    }),

    rest.get('/customerlistX', (req, res, ctx) => {
        return res(
            ctx.status(400),
            ctx.json({
                errorMessage: `Not found`,
            }),
        )
    }),
    
]