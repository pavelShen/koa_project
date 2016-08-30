'use strict';

let koa = require('koa');
let Router = require('koa-router');
let render = require('koa-ejs');
let path = require('path');
let logger = require('./log.js');

let app = koa();
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

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(myRouter.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

app.listen(3000);



