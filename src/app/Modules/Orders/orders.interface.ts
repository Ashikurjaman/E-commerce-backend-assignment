import mongoose from 'mongoose';

export interface OrderItem {
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}
export interface OrderDataRequest extends OrderItem {
  email: string;
  items: OrderItem[];
}

export interface OrderQuery {
  email: string;
}
