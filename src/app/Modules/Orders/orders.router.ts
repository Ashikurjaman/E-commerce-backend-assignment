import express from 'express';
import { orderController } from './orders.controller';
const router = express.Router();

router.post('/', orderController.orderCreate);
router.get('/', orderController.orderGet);

export const OrderRoute = router;
