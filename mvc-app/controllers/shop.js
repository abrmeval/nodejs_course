import { Product } from '../models/product.js';
import { Cart } from '../models/cart.js';

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
    Cart.getCart((cart) => {
        Product.fetchAll(productsList => {
            const products = productsList.filter(p => {
                const cartProduct = cart.products.find(cp => cp.id == p.id);
                if (cartProduct) {
                    p.qty = cartProduct.qty
                    return true;
                }
                return false;
            });
            res.render('shop/cart', {
                pageTitle: 'Cart',
                path: '/cart',
                products: products
            });
        });
    })
};

export const addToCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
    });
    res.redirect('/cart');
};

export const deleteProductFromCart = (req, res, next) => {
    const productId = req.body.productId;
    Cart.deleteProduct({ id: productId});
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

