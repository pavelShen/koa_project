'use strict';
console.log('start');

let koa = require('koa');
let Router = require('koa-router');
let render = require('koa-ejs');
let path = require('path');

let app = koa();
let myRouter = new Router();

let request = require('superagent');

myRouter.get('user','/users/:id', function *(next) {
  yield this.render('user',{
    userInfo:{
        id:this.params.id,
        text:'textFont'
    }
  });
});

// myRouter.get('detail','/detail/:id', function *(next) {
//   yield this.render('detail',{
//     text:'详细'
//   })
// });

myRouter.get('detail','/detail/:id',function *(next){
  request.get('https://m.ele.me/restapi/shopping/restaurants?latitude=31.20745&longitude=121.59842&offset=40&limit=1&extras[]=activities')
        .end(function(err, res){
            if(err){
              console.log(err)
            }
            else{
              console.log(res.text);
            }
        });
   yield this.render('detail',{
    text:'aa'
   });
})

myRouter.get('notFound','/404', function *(next) {
  yield this.render('404');
});

myRouter.get('root','/', function *(next) {
  yield this.render('index');
});

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(myRouter.routes());

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.listen(3000);



