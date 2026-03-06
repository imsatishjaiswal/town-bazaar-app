import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    loyaltyPoints: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
