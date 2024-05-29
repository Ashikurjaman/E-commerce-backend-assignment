import { Request, Response } from 'express';
import { OrderService } from './orders.service';

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

const getDataByEmailAndAll = async (req: Request, res: Response) => {
  try {
    const getEmail = req.query.email as string;

    if (getEmail) {
      const result = await OrderService.order(getEmail);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await OrderService.getOrder();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Orders Not Found!',
      data: error,
    });
  }
};

export const orderController = {
  orderCreate,
  getDataByEmail: getDataByEmailAndAll,
};
