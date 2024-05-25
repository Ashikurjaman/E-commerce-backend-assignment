import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import { OrderDataRequest, OrderQuery } from './orders.interface';
import { OrderModel } from './orders.model';
import { string } from 'joi';

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

const getDataByEmail = async (req: Request, res: Response) => {
  try {
    const getEmail = req.query?.email;
    console.log(req.query);
    // const result = await OrderService.order(getEmail);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      //   data: result,
    });
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
  orderGet,
  getDataByEmail,
};
