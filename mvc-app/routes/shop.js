import path from 'path';
import express from 'express';;
import { getProducts, getIndex, getCart, getCheckout, getOrders, getProductDetails, addToCart, deleteProductFromCart } from '../controllers/shop.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/products/:productId', getProductDetails);
router.get('/cart', getCart);
router.post('/cart', addToCart);
router.post('/cart-delete-item', deleteProductFromCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

export default router;
