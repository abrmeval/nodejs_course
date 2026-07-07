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
    res.render('admin/upsert-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = parseInt(req.body.price);
    const description = req.body.description;

    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

export const getUpdateProduct = (req, res, next) => {
    const editMode = req.query.edit === 'true';
    const productId = req.params.productId;

    Product.findById(productId, (product) => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/upsert-product', {
            pageTitle: 'Update Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });
};

export const postUpdateProduct = (req, res, next) => {
    const productId = req.body.productId;
     const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = parseInt(req.body.price);
    const description = req.body.description;

    const product = new Product(productId, title, imageUrl, description, price);
    product.update();
    res.redirect('/admin/products');
};

export const postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteById(productId, () => {
        res.redirect('/admin/products');
    });
};