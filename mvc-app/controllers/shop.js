import { Product } from '../models/product.js';

export const getIndex = (req, res, next) => {
    Product.fetchAll(productsList => {
        res.render('shop/index', {
            prods: productsList,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

export const getProducts = (req, res, next) => {
    Product.fetchAll(productsList => {
        res.render('shop/product-list', {
            prods: productsList,
            pageTitle: 'Products',
            path: '/products',
        });
    });
}

export const getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart',
    });
};

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
};
