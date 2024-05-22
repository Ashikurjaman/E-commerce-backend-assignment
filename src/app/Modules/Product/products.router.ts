import express, { Request, Response } from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.post('/', productsController.productControllerFunction);

export const ProductRoute = router;
