import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
});

const restaurantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurantName: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  deliveryPrice: { type: Number, required: true, trim: true },
  estimatedDeliveryTime: { type: Number, required: true, trim: true },
  cuisines: [{ type: String, required: true, trim: true }],
  menuItems: [menuItemSchema],
  imageUrl: { type: String, required: true, trim: true },
  lastUpdated: { type: Date, required: true, trim: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
