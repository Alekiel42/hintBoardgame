const Category = require('./../models/category');

const categoryController = {

    getAllCategories : async (_, res) => {
        try {
            const categories = await Category.findAll();
            if(categories.length === 0){
                res.json("Il n'y a aucune catégorie à afficher");
            } else {
                res.json(categories);
            }
        } catch (error) {
            console.error(error);
            // todo add status
            res.json(error.message);
        }
    }
}

module.exports = categoryController;


