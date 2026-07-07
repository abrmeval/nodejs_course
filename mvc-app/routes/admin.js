import path from 'path';
import express from 'express';
import { getAddProduct, postAddProduct, getUpdateProduct, postUpdateProduct, getProducts, postDeleteProduct } from '../controllers/admin.js';

const router = express.Router();

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product/:productId', getUpdateProduct);

// /admin/edit-product => POST
router.post('/edit-product', postUpdateProduct);

router.post('/delete-product', postDeleteProduct);

export { router };

