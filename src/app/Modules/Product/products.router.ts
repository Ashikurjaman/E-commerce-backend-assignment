import express from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.post('/', productsController.createProductController);
router.get('/', productsController.getProductControllerFunction);
router.put('/:productID', productsController.productDataUpdateFunction);
router.delete('/:productID', productsController.productDataDeleteFunction);
router.get('/', productsController.searchProduct);

export const ProductRoute = router;
