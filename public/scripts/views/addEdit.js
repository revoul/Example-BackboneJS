'use strict';

var app = app || {};

app.AddEdit_View = Backbone.View.extend({
	tagName: 'section',
	className: 'add_content',
	template: _.template( $('#tpl_add').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});