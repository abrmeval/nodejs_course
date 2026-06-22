import { Product } from '../models/product.js';

export const getProducts = (req, res, next) => {
    Product.fetchAll(productsList => {
        res.render('admin/products', {
            prods: productsList,
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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

export const updateProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Products',
        path: '/admin/edit-product'
    });
};