const Category = require('./../models/category');

const categoryController = {

    getAllCategories : async (_, res) => {
        try {
            const categories = await Category.findAll();
            if(categories.length === 0){
                res.status(204).render('allCategories', { title : "Les catégories d'action", message : "Oups.... le jeu ne peut pas commencer sans catégorie !"});
            } else {
                res.status(201).render('allCategories', { title : "Les catégories d'action", categories });
            }   
        } catch (error) {
            console.error(error);
            res.status(500).render('error', {error : error.message})
        }
    }
}

module.exports = categoryController;

