const client = require('./../database');

class Category {

    constructor(obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const { rows } = await client.query('SELECT * FROM Category');
            return rows.map(row => new Category(row));
        } catch (error) {
            console.error(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}

module.exports = Category;