import { TProducts } from './products.interface';
import { ProductModel } from './products.model';

const createProduct = async (payload: TProducts) => {
  const result = await ProductModel.create(payload);
  return result;
};
const getAllProduct = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingledata = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingledata,
};
