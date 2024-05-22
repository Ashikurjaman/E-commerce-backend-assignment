import { TProducts } from './products.interface';
import { ProductModel } from './products.model';

const createProduct = async (payload: TProducts) => {
  const result = await ProductModel.create(payload);
};

export const ProductService = {
  createProduct,
};
