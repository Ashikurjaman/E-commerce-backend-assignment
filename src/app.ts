import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/Modules/Product/products.router';
import { OrderRoute } from './app/Modules/Orders/orders.router';
const app: Application = express();

app.use(express.json());
const corsOrgin = {
  origin: [
    'https://ecommarce-backend-project.vercel.app/',
    'http://localhost:5000/',
  ],
};
app.use(cors(corsOrgin));

app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
