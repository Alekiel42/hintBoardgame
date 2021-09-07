require('dotenv').config(); //todo a enlever

const Category = require('./app/models/category');
const Hint = require('./app/models/hint');
const categoryController = require('./app/controllers/categoryController');
const hintController = require('./app/controllers/hintController');

// TEST DES MODELS 
/*
const testFindAllCategories = async () => {
    const cats = await Category.findAll();
    console.log(cats);
}
testFindAllCategories();

const testFindOneRandomHint = async () => {
    const hint = await Hint.randomFromCategory(3);
    console.log(hint);
}
testFindOneRandomHint();

const testFindAllHintGiven = async () => {
    const hints = await Hint.findHintsGiven();
    console.log(hints);
}
testFindAllHintGiven();
*/

//TEST DES CONTROLLERS

/*
const res = {
    json: data => {
        console.log(data)
    }
}

const req = {
    params: {
        category_id: 2
    }
}

categoryController.getAllCategories(null, res);
hintController.getOneHintFromCategory(req,res)
hintController.getHintsGiven(null, res);
*/
