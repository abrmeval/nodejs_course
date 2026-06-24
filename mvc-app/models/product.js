import fs from 'fs'
import path from 'path';

const p = path.join(import.meta.dirname, '../', 'data', 'products.json');

const getProductsFromFile = (callback) => {

    fs.readFile(p, (err, content) => {
        if (err) {
            callback([]);
            return;
        }
        callback(JSON.parse(content));
    });
}

export class Product {
    constructor(title, imageUrl, description, price) {
        this.id = Math.random().toString();
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
            //"this" refers to the class Product
            products.push(this)
            // fs.mkdir(p)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err)
                    console.log(err);
            })
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }

    static findById(id, callback) {
        getProductsFromFile((products) => {
            const product = products.find(p => p.id === id);
            callback(product);
        });
    }
}