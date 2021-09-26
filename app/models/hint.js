const client = require("./../database");

class Hint {
  constructor(obj = {}) {
    for (const propName in obj) {
      this[propName] = obj[propName];
    }
  }

  static async randomFromCategory(category_id) {
    try {
      const query = `SELECT hint.id, hint.content, hint.picture, hint.sound, hint.hint_given, hint.category_id, picto.picto
                            FROM hint
                            JOIN picto ON (hint.picto_id = picto.id) 
                            WHERE hint_given = false AND category_id = $1 
                            ORDER BY random() 
                            LIMIT 1;`;
      const { rows } = await client.query(query, [category_id]);

      if (rows[0]) {
        const queryUpdate = "UPDATE hint SET hint_given = true WHERE id = $1";
        const updated = await client.query(queryUpdate, [rows[0].id]);
        return new Hint(rows[0]);
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  static async findHintsGiven() {
    try {
      const query = `SELECT * FROM hint JOIN picto ON hint.picto_id = picto.id WHERE hint_given = true`;
      const { rows } = await client.query(query);
      if (rows.length === 0) {
        return null;
      }
      return rows.map((row) => new Hint(row));
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  static async changeHintGiven() {
    try {
      const query = "UPDATE hint SET hint_given = false";
      await client.query(query);
      return null;
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  // delete all hints
  static async deleteHintsFromCategory(category_id) {
    try {
      const query = "DELETE FROM hint WHERE category_id = 4";
      await client.query(query, [category_id]);
      return null;
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }
}

module.exports = Hint;
