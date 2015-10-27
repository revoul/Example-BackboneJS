'use strict';

var app = app || {};

app.Consultants_Collection = Backbone.Collection.extend({
	model : app.Consultant_Model,
	localStorage: new Backbone.LocalStorage('bd_consultants'),
	initialize : function () {
		this.fetch();
	}
});