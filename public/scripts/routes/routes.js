'use strict';

var app = app || {};

app.Routes = Backbone.Router.extend({
	routes : {
		 '' : 'home',
		 'add' : 'add',
		 'edit/:item' : 'edit'
	},
	home: function () {
		app.Consultant_Controller.home();
	},
	add : function () {
		app.Consultant_Controller.addEdit();
	},
	edit : function (_item) {
		app.Consultant_Controller.addEdit(_item);
	}
});