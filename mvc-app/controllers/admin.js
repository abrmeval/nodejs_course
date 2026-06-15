import { Product } from '../models/product.js';

export const getProducts = (req, res, next) => {
     Product.fetchAll(productsList => {
        res.render('admin/products', {
            pageTitle: 'Products',
            path: '/admin/products',
        });
    });
};

export const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

export const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

export const updateProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Products',
        path: '/admin/edit-product'
    });
};