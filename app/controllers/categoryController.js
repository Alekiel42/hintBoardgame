const Category = require('./../models/category');

const categoryController = {

    getAllCategories : async (_, res) => {
        try {
            const categories = await Category.findAll();
            if(categories.length === 0){
                res.status(204).render('error', { message : "Il n'y a aucune catégorie à afficher"});
            } else {
                res.render('allCategories', { categories });
            }
        } catch (error) {
            console.error(error);
            res.status(500).render('error', {error : error.message})
        }
    }
}

module.exports = categoryController;

