import customerController from "../controllers/customer.controller"
import orderController from "../controllers/order.controller"
import productController from "../controllers/product.controller"
import { IProduct } from "../types/product"
import { IOrder } from "../types/order"
import { ICostumer } from "../types/customer"

// Finish the resolvers
export const resolvers = {
  Query: {
    products: () => {},
    customers: () => {},
    orders: () => {},
    getProductById: async (_:unknown, { id }: { id: string }) => await productController.getProductById(id),
    getCustomerById: async (_:unknown, { id }: { id: string }) => await customerController.getCustomerById(id),
  },
  Product: {
    customers: () => {}
  },
  Customer: {
    products: () => {}
  },
  Order: {
    product: () => {},
    customer: () => {}
  },
  Mutation: {
    addProduct: () => {},
    editProduct: () => {},
    removeProduct: () => {},

    addCustomer: () => {},
    editCustomer: () => {},
    removeCustomer: () => {},

    addOrder: () => {},
    editOrder: () => {},
    removeOrder: () => {}
  }
}
