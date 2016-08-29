'use strict';

let superagent = require('superagent');

let core = function *(next){
  var res = yield superagent.get('https://m.ele.me/restapi/shopping/restaurants')
				  .query({
				    latitude:31.20745,
				    longitude:121.59842,
				    offset:40,
				    limit:1
				  });

  yield this.render('index',{
    data:JSON.parse(res.text)
  });
}

module.exports = core;
