const client = require("./../database");

class Category {
  constructor(obj = {}) {
    for (const propName in obj) {
      this[propName] = obj[propName];
    }
  }

  static async findAll() {
    try {
      const { rows } = await client.query("SELECT * FROM category");
      return rows.map((row) => new Category(row));
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }

  // delete a category
  async delete() {
    try {
      if (this.id) {
        await db.query("DELETE FROM category WHERE id = $1", [this.id]);
        await deleteHintsFromCategory(this.id);
        return null;
      }
    } catch (error) {
      console.error(error);
      throw new Error(error.detail ? error.detail : error.message);
    }
  }


  // create / update
}

module.exports = Category;
