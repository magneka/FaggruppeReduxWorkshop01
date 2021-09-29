import { rest } from 'msw'
import faker from 'faker'

const getFakeProducts = () => {
    const prodArr = []
    for (let index = 0; index < 20; index++) {
        prodArr.push({
            id: index,
            productName: faker.commerce.productName(),
            color: faker.commerce.color(),
            price: faker.commerce.price()
        })
    }
    return prodArr
}

export const productsListMockHandlers = [

    rest.get('/productlist', (req, res, ctx) => {
        return res(
            ctx.json(getFakeProducts())
        )
    })
]