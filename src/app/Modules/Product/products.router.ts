import express, { Request, Response } from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.post('/', productsController.createProductController);
router.get('/', productsController.getProductControllerFunction);

export const ProductRoute = router;
