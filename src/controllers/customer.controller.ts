import { Customer } from "../models/customer.model";
import { ICostumer } from "../types/customer";

const getCostumers = async() => {
    const customers = await Customer.find()
    return customers
}

const createCustomer = async(data: Omit<ICostumer, "id">) => {
    const customer = new Customer(data)
    return await customer.save()
}

const getCustomerById = async(id: string) => {
    return await Customer.findById(id)
}

const updateCustomer = async(id: string, data: Partial<ICostumer>) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true })
}

const deleteCustomer = async(id: string) => {
    return await Customer.findByIdAndDelete(id)
}

export default {
    getCostumers, 
    createCustomer, 
    getCustomerById, 
    updateCustomer, 
    deleteCustomer
}