import express from 'express';
import { orderController } from './orders.controller';
const router = express.Router();

router.post('/', orderController.orderCreate);
router.get('/', orderController.getDataByEmail);
export const OrderRoute = router;
