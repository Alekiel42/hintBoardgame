const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));

const Category = require('./../app/models/category');

var categoriesSchema = {
    title: 'List of Categories',
    type: 'object',
    required: ['id', 'label'],
    properties: {
      id: {
        type: 'number',
        uniqueItems: true
      },
      label: {
        type: 'string',
        uniqueItems : true
      }
    }
  };


describe('Test findAll() du model Category', () => {


    it('shoud return a array', async () => {
        console.log(await Category.findAll());
        expect(await Category.findAll()).to.be.a('array');
    });

    it('should have a length > 0', async () => {
        expect(await Category.findAll()).to.have.length.at.least(0);
    })

    it('should have properties id and label', async () => {
        const categories = await Category.findAll();
        categories.forEach(cat => expect(cat).to.be.jsonSchema(categoriesSchema));
    })

});