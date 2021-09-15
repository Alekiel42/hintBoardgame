const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaitHttp = require('chai-http');
const server = require('../index')

var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));


const { getAllCatgories } = require('../app/controllers/categoryController');
var urlBase = "/v1";

chai.use(chaitHttp);


describe('Controller getAllCategories() : ', () => {
  it('should have status 201 and be an object...', (done) => {
      chai.request(server)
      .get(urlBase + '/')
      .end((err,res) => {
          res.should.have.status(201);
          expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
          expect(res.text).to.contain('Les catégories d\'action');
          expect('h1').dom.to.not.contain.text("I'm a kitty!");
          done();
      })
  })

});
