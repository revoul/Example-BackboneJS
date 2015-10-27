'use strict';

var app = app || {};

$(function(){
	app.Consultant_Controller = new app.Controller();
	new app.Routes();
	Backbone.history.start();
});