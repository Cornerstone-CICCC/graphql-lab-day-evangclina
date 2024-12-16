import customerController from "../controllers/customer.controller"
import orderController from "../controllers/order.controller"
import productController from "../controllers/product.controller"
import { IProduct } from "../types/product"
import { IOrder } from "../types/order"
import { ICostumer } from "../types/customer"

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => await productController.getProducts(),
    customers: async () => await customerController.getCostumers(),
    orders: async () => await orderController.getOrders(),
    getProductById: async (_:unknown, { id }: { id: string }) => await productController.getProductById(id),
    getCustomerById: async (_:unknown, { id }: { id: string }) => await customerController.getCustomerById(id),
  },
  Product: {
    customers: async () => customerController.getCostumers()
  },
  Customer: {
    products: async () => productController.getProducts()
  },
  Order: {
    product: async () => productController.getProducts(),
    customer: async () => customerController.getCostumers()
  },
  Mutation: {
    addProduct: async (_: unknown, { productName, productPrice }: Omit<IProduct, "id">) => await productController.createProduct({ productName, productPrice }),
    editProduct: async (_: unknown, { id, productName, productPrice }: IProduct) => await productController.updateProduct(id, { productName, productPrice }),
    removeProduct: async (_:unknown, { id } : { id: string }) => await productController.deleteProduct(id),

    addCustomer: async (_: unknown, { firstName, lastName, email }: Omit<ICostumer, "id">) => await customerController.createCustomer({ firstName, lastName, email }),
    editCustomer: async (_: unknown, { id, firstName, lastName, email }: ICostumer) => await customerController.updateCustomer(id, { firstName, lastName, email }),
    removeCustomer: async (_: unknown, { id } : { id: string }) => await customerController.deleteCustomer(id),

    addOrder: async (_:unknown, { productId, customerId}: Omit<IOrder, "id">) => await orderController.createOrder(productId, customerId),
    editOrder: async (_: unknown, {id, productId, customerId}: IOrder) => await orderController.updateOrder(id, { productId, customerId }),
    removeOrder: async (_: unknown, { id }: { id: string }) => await orderController.deleteOrder(id)
  }
}
