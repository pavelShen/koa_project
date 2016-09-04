'use strict';

const should = require('should');
const supertest = require('supertest');
const superagent = require('superagent');

var restaurantData = require('../controller/restaurant.js');
console.log(restaurantData);

describe('restaurantData type', function() {
  it('restaurantData should return an Function', function(done) {
    restaurantData.should.be.a.Function();
    done();
  });
});

describe('restaurantData isOK', function() {
  it('restaurantData should getData', function(done) {
    supertest('https://m.ele.me/restapi/shopping/restaurants?latitude=31.20745&longitude=121.59842&offset=40&limit=1').get('/').expect(200,done);
  });
});
