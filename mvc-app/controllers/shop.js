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

export const getProductDetails = (req, res, next) => {
    //We extract the productId from the request parameters
    const productId = req.params.productId;
    Product.findById(productId, (product) => {

        if (!product)
            return res.status(404).render('404', { path: req.url, pageTitle: 'Product Not Found' });
        
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
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

export const addToCart = (req, res, next) => {
const productId = req.body.productId;
res.redirect('/cart');
};

export const getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your orders',
        path: '/orders',
    });
};

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    });
};

