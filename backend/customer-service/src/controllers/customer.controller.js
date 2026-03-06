import customerService from "../services/customer.service.js";

const createCustomer = async (req, res) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await customerService.getCustomerByUserId(
      req.params.userId,
    );
    if (!customer) {
      return res.status(404).json({ message: "Customer profile not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  createCustomer,
  getCustomer,
};
