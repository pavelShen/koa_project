'use strict';

let koa = require('koa');
let Router = require('koa-router');

let myRouter = new Router();
let restaurantData = require('./controller/restaurant.js');

myRouter.get('user','/users/:id', function *(next) {
  yield this.render('user',{
    userInfo:{
        id:this.params.id,
        text:'textFont'
    }
  });
});

myRouter.get('detail','/detail/:id',function *(next){
   yield this.render('detail',{
    text:'abc'
   });
})

myRouter.get('notFound','/404', function *(next) {
  yield this.render('404',{
    text:'a'
  });
});

myRouter.get('root','/', restaurantData);

module.exports = myRouter;