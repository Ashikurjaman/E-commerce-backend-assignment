import mongoose, { Schema, model } from 'mongoose';
import { TInventory, TProducts, TVariAnts } from './products.interface';

const variantsSchema = new Schema<TVariAnts>(
  {
    type: String,
    value: String,
  },
  { _id: false },
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
);

const productSchema = new Schema<TProducts>({
  name: { type: String, required: true },
  description: { type: String, required: [true, 'Description are required'] },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantsSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const ProductModel = mongoose.model<TProducts>('Product', productSchema);
