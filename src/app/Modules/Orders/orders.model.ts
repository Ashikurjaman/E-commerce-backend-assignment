import mongoose, { Schema } from 'mongoose';
import { OrderDataRequest, OrderItem } from './orders.interface';

const OrderItem: Schema = new Schema<OrderItem>({
  productId: { type: Schema.Types.ObjectId, ref: 'products', required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
const orderSchema: Schema = new Schema<OrderDataRequest>({
  email: { type: String, required: true },
  items: [OrderItem],
});
export const OrderModel = mongoose.model<OrderDataRequest>(
  'Orders',
  orderSchema,
);
