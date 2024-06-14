import { Router } from 'express';
import { addProduct, getAllProducts, getProductByName } from '../Controllers/productController';

const productRouter = Router();
productRouter.post('', addProduct);
productRouter.get('', getAllProducts);
productRouter.get('/:ProductName', getProductByName);

export default productRouter;