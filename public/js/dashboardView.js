var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates');
var $ = require('jquery');
var DashboardAddGameView = require('./dashAddGameView');
var DashboardAddGameFormModel = require('./dashAddGameFormModel');
var UserModel = require('./userModel');
var GameCollection = require('./gameCollection');
var GameCollectionView = require('./gameCollectionView');

module.exports = Backbone.View.extend({
  activeUser: null,
  collection: null,
  el: '.dashboard',
  template: _.template(template.dashView),
  initialize: function(){
    this.$el.append(this.render().el);
    var GameCol = new GameCollection();
    GameCol.fetch().then((function(data){
      var GameCollView = new GameCollectionView({collection: GameCol});
      var DashAddFormView = new DashboardAddGameView({collection: GameCol});
    }));
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }

});
