'use strict';

let path = require('path');
let koa = require('koa');
let render = require('koa-ejs');
let myRouter = require('./route.js');
let logger = require('./log.js');

let app = koa();

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



