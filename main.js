'use strict';

let koa = require('koa');
let Router = require('koa-router');
let render = require('koa-ejs');
let path = require('path');

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'log/app.log', category: 'siteName' }
  ]
});
var logger = log4js.getLogger("siteName");

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
  yield this.render('404');
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



