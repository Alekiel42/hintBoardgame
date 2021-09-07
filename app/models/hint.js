const client = require('./../database');

class Hint {

    constructor(obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async randomFromCategory(category_id) {
        try {
            const query = `SELECT * FROM hint WHERE hint_given = false AND category_id = $1 ORDER BY random() LIMIT 1;`
            const { rows } = await client.query(query, [category_id]);
            if(rows[0]){
                return new Hint(rows[0]);
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            throw new Error(error.detail? error.detail : error.message);
        }
    }

    static async findHintsGiven(){
        try {
            const query = `SELECT * FROM hint WHERE hint_given = true`;
            const { rows } = await client.query(query);
            if(rows.length === 0) {
                return null;
            }
            return rows.map(row => new Hint(row));
        } catch (error) {
            console.error(error);
            throw new Error(error.detail ? error.detail: error.message);
        }
    }

}

module.exports = Hint;