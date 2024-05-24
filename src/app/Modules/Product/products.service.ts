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
  const result = await ProductModel.findById(id);
  return result;
};
const searchProduct = async (searchTerm: string) => {
  const result = await ProductModel.find({
    $or: [
      {
        name: new RegExp(searchTerm, 'i'),
      },
      { description: new RegExp(searchTerm, 'i') },
    ],
  });
  return result;
};
const productDelete = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};
const updateSingleData = async (id: string, productUpdate: any) => {
  const result = await ProductModel.findByIdAndUpdate(id, productUpdate, {
    new: true,
  });
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingledata,
  updateSingleData,
  productDelete,
  searchProduct,
};
