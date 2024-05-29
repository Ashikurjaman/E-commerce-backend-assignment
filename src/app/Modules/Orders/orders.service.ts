import { ProductModel } from '../Product/products.model';
import { OrderModel } from './orders.model';
import mongoose from 'mongoose';

const createOrder = async (
  email: string,
  productId: string,
  price: number,
  quantity: number,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const productAggregation = await ProductModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(productId) } },
      { $project: { name: 1, inventory: 1 } },
    ]).session(session);
    const order = new OrderModel({
      email,
      items: [
        { productId: new mongoose.Types.ObjectId(productId), price, quantity },
      ],
    });
    await order.save({ session });
    await session.commitTransaction();
    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
};

const getOrder = async () => {
  const result = await OrderModel.find();
  return result;
};

const order = async (payload: string) => {
  const result = await OrderModel.find({ email: payload });
  return result;
};

export const OrderService = {
  createOrder,
  getOrder,
  order,
};
