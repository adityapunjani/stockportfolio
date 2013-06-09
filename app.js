var locomotive = require('locomotive');
var express = require('express'),
  nowjs = require('now');
var connect = require('connect');
var app = express();
app.set('view options', {
  layout: false
})
var options = {
  db: {
    type: 'none'
  }
};
locomotive.boot('.', 'development', function(err, app) {
  if(err) {
    throw err;
  }

  console.log(app.settings);

  GLOBAL.everyone = nowjs.initialize(app);
  app.listen(3000, '127.0.0.1', function() {
    var addr = this.address();
    console.log('listening on %s:%d', addr.address, addr.port);
  });
});



GLOBAL.everyone.now.companies = [{
  name: "Intel Corp",
  ticker: "INTC",
  price: 56,
  change: 1.6,
  shares: 100
}, {
  name: "Yahoo Inc",
  ticker: "YHOO",
  price: 45.40,
  change: -1.04,
  shares: 85
}, {
  name: "Microsoft Corp",
  ticker: "MSFT",
  price: 65.45,
  change: 1.7,
  shares: 200
}, {
  name: "Apple Inc",
  ticker: "AAPL",
  price: 70.00,
  change: -.4,
  shares: 60
}, {
  name: "Google Inc",
  ticker: "GOOG",
  price: 93.8,
  change: 1.58,
  shares: 150
}, {
  name: "Dell Inc",
  ticker: "DELL",
  price: 23.18,
  change: -1.67,
  shares: 80
}, {
  name: "IBM Corp",
  ticker: "IBMC",
  price: 194.5,
  change: -.32,
  shares: 100
}];

GLOBAL.everyone.now.buy = function(index, x) {
  GLOBAL.everyone.now.companies[index].shares -= x;
  everyone.now.updateChange();
};

GLOBAL.everyone.now.sell = function(index, x) {
  GLOBAL.everyone.now.companies[index].shares += x;
  everyone.now.updateChange();
};

var generateRandomnumber = function() {
    var x;
    var y;
    var z;
    x = Math.random();
    y = Math.random();
    if(x <= .25) {
      z = y * -1;
    } else if(x <= .5) {
      z = y;
    } else if(x <= .75) {
      z = 2 * y;
    } else {
      z = -2 * y;
    }

    return Math.round(z * 100) / 100;
  };
var updateStock = function() {

    setInterval(function() {
      for(var i = 0; i < GLOBAL.everyone.now.companies.length; i++) {
        var p = generateRandomnumber();
        GLOBAL.everyone.now.companies[i].change = p;
        GLOBAL.everyone.now.companies[i].price = GLOBAL.everyone.now.companies[i].price + parseFloat(GLOBAL.everyone.now.companies[i].change);
        if(typeof(everyone.now.updateChange) ===
        "function") {
          GLOBAL.everyone.now.companies[i].value = everyone.now.updateChange();
        };
      }
    }, 1000);

  }();