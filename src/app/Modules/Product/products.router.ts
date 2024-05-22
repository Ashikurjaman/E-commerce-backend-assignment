import express from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.post('/', productsController.createProductController);
router.get('/', productsController.getProductControllerFunction);
router.get('/:productID', productsController.getSingleProductFunction);
router.put('/:productID', productsController.productDataUpdateFunction);

export const ProductRoute = router;
