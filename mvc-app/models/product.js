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
    constructor(title) {
        this.title = title;
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
        getProductsFromFile(callback)
    }
}