import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/Modules/Product/products.router';
import { OrderRoute } from './app/Modules/Orders/orders.router';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log(process.cwd());

export default app;
