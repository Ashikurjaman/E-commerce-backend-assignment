import { Request, Response } from 'express';
import { ProductService } from './products.service';

const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;
  try {
    const result = await ProductService.createProduct(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product does not created successfully',
      error: error,
    });
  }
};

const getProductControllerFunction = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not fetched products!',
      error: error,
    });
  }
};

const getSingleProductFunction = async (req: Request, res: Response) => {
  try {
    const getSingleProduct = req.params?.productID;
    const result = await ProductService.getSingledata(getSingleProduct);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not fetched products!',
      error: error,
    });
  }
};

const productDataUpdateFunction = async (req: Request, res: Response) => {};

export const productsController = {
  createProductController,
  getProductControllerFunction,
  getSingleProductFunction,
  productDataUpdateFunction,
};
