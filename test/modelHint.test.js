const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));

const Hint = require('../app/models/hint');

var hintSchema = {
    title: 'Schema of a hint',
    type: 'object',
    required: ['id', 'hint_given', 'category_id', 'content', 'picture', 'sound'],
    properties: {
      id: {
        type: 'number',
        uniqueItems: true
      },
      content: {
      },
      picture: {
      },
      sound: {
      },
      hint_given: {
        type: 'boolean',
      },
      category_id: {
        type: 'number',
      }
    }
  };


describe('Test randomFromCategory() du model Hint', () => {
    const cat = 1;
    it('shoud return an object', async () => {
        expect(await Hint.randomFromCategory(cat)).to.be.a('object');

        // todo tester quand "null" : plus de hint dans Cat
        
    });
});

describe('Test findHintsGiven() du model Hint',  () => {

    it('shoud return a array with a length of 1 :', async () => {
        expect(await Hint.findHintsGiven()).to.be.a('array').to.have.length.least(1);
    });

    it('should have the good schema ', async () => {
        const hint = await Hint.findHintsGiven();
        expect(hint[0]).to.be.jsonSchema(hintSchema);
    })

    it('should have hint_given equal to "true"', async () => {
        const hint= await Hint.findHintsGiven();
        expect(hint[0].hint_given).to.be.equal(true);
    })

});

describe('Reseting of game : ', () => {
    it('should change all hint_given to false...', async () => {
        expect(await Hint.changeHintGiven()).to.be.null;

        // todo verif les etats ? faire requete ?

    });
});

describe('Test findHintsGiven() du model Hint where no hint is available',  () => {
    it('shoud return null :', async () => {
        expect(await Hint.findHintsGiven()).to.be.null;
    });
});