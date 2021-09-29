//import { customerDetailsMockHandler } from "../pages/customerdetails/customerDetailsMockHandler";
import { customersListMockHandlers } from "../reduxstore/customerlist/customersListMockHandlers";
import { productsListMockHandlers } from "../reduxstore/productlist/productListMockHandler";

export const handlers = [
    ...customersListMockHandlers,
    //...customerDetailsMockHandler,
    ...productsListMockHandlers
]