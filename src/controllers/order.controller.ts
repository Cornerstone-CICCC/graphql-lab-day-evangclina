import { Order } from "../models/order.model";
import { IOrder } from "../types/order";


const getOrders = async (productId: string, customerId: string) => {
    const orders = await Order.find()
    return orders
}

const createOrder = async(productId: string, customerId: Omit<IOrder, "id">) => {
    const order = new Order(productId, customerId)
    return await order.save()
}

const updateOrder = async(id: string, data: Partial<IOrder>) => {
    return await Order.findByIdAndUpdate(id, data, { new: true })
}

const deleteOrder = async(id: string) => {
    return await Order.findByIdAndDelete(id)
}

export default {
    getOrders, 
    createOrder, 
    updateOrder, 
    deleteOrder
}