const {Router} = require('express');
const categoryController = require('./controllers/categoryController');
const hintController = require('./controllers/hintController');

const router = Router();

router.get('/', categoryController.getAllCategories);

router.get('/hints', hintController.getHintsGiven);

router.get('/hint/category;/:category_id(\\d+)', hintController.getOneHintFromCategory);

router.use((_, response) => response.status(404).json('Page non existante'));

module.exports = router;