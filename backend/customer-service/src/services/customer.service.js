import Customer from "../models/customer.model.js";

const createCustomer = async (data) => {
  return await Customer.create(data);
};

const getCustomerByUserId = async (userId) => {
  return await Customer.find({ userId });
};

export default {
  createCustomer,
  getCustomerByUserId,
};
