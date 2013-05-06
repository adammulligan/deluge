(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['torrent_list.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    ";
  options = {hash:{
    'torrent': (depth0)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.subView),stack1 ? stack1.call(depth0, "TorrentItemView", options) : helperMissing.call(depth0, "subView", "TorrentItemView", options)))
    + "\n  ";
  return buffer;
  }

  buffer += "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Up Rate</th>\n      <th>Upload Total</th>\n      <th>Ratio</th>\n      <th>Down Rate</th>\n      <th>Size</th>\n      <th>Downloaded</th>\n      <th>%</th>\n    </tr>\n  </thead>\n\n  ";
  stack1 = helpers.each.call(depth0, depth0.torrents, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });
templates['torrent_item.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>\n  "
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.directory)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.up_rate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " KB/s</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.megabytes_uploaded)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.ratio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.down_rate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " KB/s</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.size_in_megabytes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.megabytes_done)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.percentage_complete)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n";
  return buffer;
  });
})();


(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['torrent_list.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    ";
  options = {hash:{
    'torrent': (depth0)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.subView),stack1 ? stack1.call(depth0, "TorrentItemView", options) : helperMissing.call(depth0, "subView", "TorrentItemView", options)))
    + "\n  ";
  return buffer;
  }

  buffer += "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Up Rate</th>\n      <th>Upload Total</th>\n      <th>Ratio</th>\n      <th>Down Rate</th>\n      <th>Size</th>\n      <th>Downloaded</th>\n      <th>%</th>\n    </tr>\n  </thead>\n\n  ";
  stack1 = helpers.each.call(depth0, depth0.torrents, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });
templates['torrent_item.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>\n  "
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.directory)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.up_rate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " KB/s</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.megabytes_uploaded)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.ratio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.down_rate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " KB/s</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.size_in_megabytes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.megabytes_done)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " MiB</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.torrent),stack1 == null || stack1 === false ? stack1 : stack1.percentage_complete)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n";
  return buffer;
  });
})();


// Generated by CoffeeScript 1.6.2
(function() {
  var _base, _base1, _base2, _base3, _base4, _base5, _base6, _base7, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (_base = window.Backbone).Models || (_base.Models = {});

  window.Backbone.Models.Torrent = (function(_super) {
    __extends(Torrent, _super);

    function Torrent() {
      _ref = Torrent.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Torrent;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base1 = window.Backbone).Collections || (_base1.Collections = {});

  Backbone.Collections.TorrentCollection = (function(_super) {
    __extends(TorrentCollection, _super);

    function TorrentCollection() {
      _ref1 = TorrentCollection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    TorrentCollection.prototype.model = Backbone.Models.Torrent;

    return TorrentCollection;

  })(Backbone.Collection);

  window.Backbone || (window.Backbone = {});

  (_base2 = window.Backbone).Views || (_base2.Views = {});

  Backbone.Views.TorrentListView = (function(_super) {
    __extends(TorrentListView, _super);

    function TorrentListView() {
      this.render = __bind(this.render, this);
      this.handleTorrentUpdate = __bind(this.handleTorrentUpdate, this);      _ref2 = TorrentListView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    TorrentListView.prototype.template = Handlebars.templates['torrent_list.hbs'];

    TorrentListView.prototype.initialize = function(options) {
      var torrents;

      torrents = options.torrents || {};
      this.torrents = new Backbone.Collections.TorrentCollection(torrents);
      window.deluge_socket.on('torrents', this.handleTorrentUpdate);
      return this.render();
    };

    TorrentListView.prototype.handleTorrentUpdate = function(torrents) {
      this.torrents.reset(torrents || []);
      return this.render();
    };

    TorrentListView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        torrents: this.torrents.models
      }));
      this.renderSubViews();
      return this;
    };

    TorrentListView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return TorrentListView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base3 = window.Backbone).Views || (_base3.Views = {});

  Backbone.Views.TorrentItemView = (function(_super) {
    __extends(TorrentItemView, _super);

    function TorrentItemView() {
      _ref3 = TorrentItemView.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    TorrentItemView.prototype.tagName = 'tr';

    TorrentItemView.prototype.template = Handlebars.templates['torrent_item.hbs'];

    TorrentItemView.prototype.initialize = function(options) {
      this.model = options.torrent;
      return this.render();
    };

    TorrentItemView.prototype.formattedModel = function() {
      var model, _ref4;

      model = this.model.toJSON();
      model['size_in_megabytes'] = Math.round(model['size_bytes'] / (1024 * 1024));
      model['megabytes_done'] = Math.round(model['bytes_done'] / (1024 * 1024));
      model['percentage_complete'] = Math.round((model['bytes_done'] / model['size_bytes']) * 100);
      model['down_rate'] = Math.round(model['down_rate'] / 1024);
      model['up_rate'] = Math.round(model['up_rate'] / 1024);
      model['megabytes_uploaded'] = Math.round(model['up_total'] / (1024 * 1024));
      model['ratio'] = (model['ratio'] / 1000).toFixed(2);
      model['is_active'] = (_ref4 = model['is_active'] === "1") != null ? _ref4 : {
        "true": false
      };
      return model;
    };

    TorrentItemView.prototype.render = function() {
      var model;

      model = this.formattedModel();
      this.$el.html(this.template({
        torrent: model
      }));
      if (model['is_active']) {
        this.$el.addClass('active');
      }
      return this;
    };

    TorrentItemView.prototype.onClose = function() {};

    return TorrentItemView;

  })(Backbone.View);

  (_base4 = window.Backbone).Models || (_base4.Models = {});

  window.Backbone.Models.Torrent = (function(_super) {
    __extends(Torrent, _super);

    function Torrent() {
      _ref4 = Torrent.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    return Torrent;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base5 = window.Backbone).Collections || (_base5.Collections = {});

  Backbone.Collections.TorrentCollection = (function(_super) {
    __extends(TorrentCollection, _super);

    function TorrentCollection() {
      _ref5 = TorrentCollection.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    TorrentCollection.prototype.model = Backbone.Models.Torrent;

    return TorrentCollection;

  })(Backbone.Collection);

  window.Backbone || (window.Backbone = {});

  (_base6 = window.Backbone).Views || (_base6.Views = {});

  Backbone.Views.TorrentListView = (function(_super) {
    __extends(TorrentListView, _super);

    function TorrentListView() {
      this.render = __bind(this.render, this);
      this.handleTorrentUpdate = __bind(this.handleTorrentUpdate, this);      _ref6 = TorrentListView.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    TorrentListView.prototype.template = Handlebars.templates['torrent_list.hbs'];

    TorrentListView.prototype.initialize = function(options) {
      var torrents;

      torrents = options.torrents || {};
      this.torrents = new Backbone.Collections.TorrentCollection(torrents);
      window.deluge_socket.on('torrents', this.handleTorrentUpdate);
      return this.render();
    };

    TorrentListView.prototype.handleTorrentUpdate = function(torrents) {
      this.torrents.reset(torrents || []);
      return this.render();
    };

    TorrentListView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        torrents: this.torrents.models
      }));
      this.renderSubViews();
      return this;
    };

    TorrentListView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return TorrentListView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base7 = window.Backbone).Views || (_base7.Views = {});

  Backbone.Views.TorrentItemView = (function(_super) {
    __extends(TorrentItemView, _super);

    function TorrentItemView() {
      _ref7 = TorrentItemView.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    TorrentItemView.prototype.tagName = 'tr';

    TorrentItemView.prototype.template = Handlebars.templates['torrent_item.hbs'];

    TorrentItemView.prototype.initialize = function(options) {
      this.model = options.torrent;
      return this.render();
    };

    TorrentItemView.prototype.formattedModel = function() {
      var model, _ref8;

      model = this.model.toJSON();
      model['size_in_megabytes'] = Math.round(model['size_bytes'] / (1024 * 1024));
      model['megabytes_done'] = Math.round(model['bytes_done'] / (1024 * 1024));
      model['percentage_complete'] = Math.round((model['bytes_done'] / model['size_bytes']) * 100);
      model['down_rate'] = Math.round(model['down_rate'] / 1024);
      model['up_rate'] = Math.round(model['up_rate'] / 1024);
      model['megabytes_uploaded'] = Math.round(model['up_total'] / (1024 * 1024));
      model['ratio'] = (model['ratio'] / 1000).toFixed(2);
      model['is_active'] = (_ref8 = model['is_active'] === "1") != null ? _ref8 : {
        "true": false
      };
      return model;
    };

    TorrentItemView.prototype.render = function() {
      var model;

      model = this.formattedModel();
      this.$el.html(this.template({
        torrent: model
      }));
      if (model['is_active']) {
        this.$el.addClass('active');
      }
      return this;
    };

    TorrentItemView.prototype.onClose = function() {};

    return TorrentItemView;

  })(Backbone.View);

}).call(this);
