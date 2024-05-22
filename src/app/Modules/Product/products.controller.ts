import { Request, Response } from 'express';
import { ProductService } from './products.service';

const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProduct(productData);
  res.json({
    success: true,
    message: 'Product created successfully',
    data: result,
  });
};

export const productsController = {
  productControllerFunction: createProductController,
};
