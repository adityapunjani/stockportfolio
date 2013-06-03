var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  , nowjs = require('now');

var StockController = new Controller();

StockController.main = function() {
  
    var sessionName = this.session_name = this.params('slug');

    this.cdn_path = this.req.app.settings.cdn_path;
    var session  = nowjs.getGroup(sessionName);

    this.render();
}
module.exports = StockController;
