'use strict';

var app = app || {};

app.Routes = Backbone.Router.extend({
	routes : {
		 '' : 'home',
		 'add' : 'add',
		 'edit/:item' : 'edit'
	},
	home: function () {
		app.Consultant_Controller.trigger('home');
	},
	add : function () {
		app.Consultant_Controller.trigger('add');
	},
	edit : function (_item) {
		app.Consultant_Controller.trigger('edit', _item);
	}
});