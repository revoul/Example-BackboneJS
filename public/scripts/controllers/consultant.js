'use strict';

var app = app || {};


app.Controller =  function() {
	
	_.extend(this, Backbone.Events);	
	
	var _this = this;

	this._initialize = function () {
		this.Collection = new app.Consultants_Collection();
		_this.listenTo(_this, 'saveModel', this._saveModel);
		_this.listenTo(_this, 'home', this._home);
		_this.listenTo(_this, 'add edit', this._addEdit);
		_this.listenTo(_this, 'removeModel', this._removeModel);
	};

	this._home = function (){
		var _view = new app.Home_View({
			collection : this.Collection
		});
		_view.listenTo(this, 'renderHome', _view.render);

		$('.main_content').html( _view.render().$el);
	};

	this._addEdit = function (_item) {
		_item = (!!_item) ? _this.Collection.get(_item) : new app.Consultant_Model();
		var _view = new app.AddEdit_View({
			model : _item
		});
		$('.main_content').html(_view.render().$el);
	}

	this._saveModel = function (_model) {
		_this.Collection.create(_model);
		_this.Collection.fetch();
		Backbone.history.navigate('', {trigger : true});
	};

	this._removeModel = function (_model) {
		_model.destroy();
		if(this.collection.length == 0) this.trigger('renderHome');
	};

	this._initialize();
};