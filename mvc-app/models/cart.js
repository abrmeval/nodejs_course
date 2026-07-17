import fs from 'fs'
import path from 'path';

const p = path.join(import.meta.dirname, '../', 'data', 'cart.json');

export class Cart {
    static addProduct(id, productPrice) {

        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProduct = cart.products.find(prod => prod.id === id);

            if (existingProduct) {
                existingProduct.qty = existingProduct.qty + 1;
                existingProduct.price = existingProduct.price + productPrice;
            }
            else {
                cart.products.push({ id: id, qty: 1, price: productPrice, unitPrice: productPrice });
            }
            cart.totalPrice = cart.totalPrice + productPrice;

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err)
                    console.log(err);
            });
        })
    }

    static deleteProduct({ id, qty = 0 }) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                return;

            const cart = JSON.parse(fileContent);
            const product = cart.products.find(prod => prod.id === id);

            if (!product) return;

            if (qty > 0 && product.qty > 1) {
                if (qty > product.qty) return;

                const priceToRemove = product.unitPrice * qty;
                product.qty = qty - 1
                product.price = product.price - priceToRemove;
                cart.totalPrice = cart.totalPrice - priceToRemove;
            }
            else {
                cart.products = cart.products.filter(prod => prod.id !== product.id);
                cart.totalPrice = cart.totalPrice - product.price;
            }

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err)
                    console.log(err);
            });
        });
    }
}