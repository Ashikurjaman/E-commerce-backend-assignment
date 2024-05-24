import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import { OrderDataRequest } from './orders.interface';
import { OrderModel } from './orders.model';

const orderCreate = async (req: Request, res: Response) => {
  try {
    const { email, productId, price, quantity } = req.body;
    const result = await OrderService.createOrder(
      email,
      productId,
      price,
      quantity,
    );
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: error,
    });
  }
};

const orderGet = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getOrder();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: error,
    });
  }
};

export const orderController = {
  orderCreate,
  orderGet,
};
