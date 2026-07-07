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
                existingProduct.price =  existingProduct.price + productPrice;
            }
            else {
                cart.products.push({ id: id, qty: 1, price: productPrice });
            }
            cart.totalPrice = cart.totalPrice + productPrice;

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err)
                    console.log(err);
            });
        })
    }
}