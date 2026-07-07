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
    });
}

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = parseInt(req.body.price);
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

export const getUpdateProduct = (req, res, next) => {
    const editMode = req.query.edit === 'true';

    res.render('admin/upsert-product', {
        pageTitle: 'Update Product',
        path: '/admin/edit-product',
        editing: editMode,
    });
};