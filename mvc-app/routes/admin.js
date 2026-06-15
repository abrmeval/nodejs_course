import path from 'path';
import express from 'express';
import { getAddProduct, postAddProduct, updateProduct, getProducts } from '../controllers/admin.js';

const router = express.Router();

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product', updateProduct);

// /admin/edit-product => POST
router.post('/edit-product', (req, res, next) => {

});



export { router };

