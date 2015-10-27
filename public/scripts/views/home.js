'use strict';

var app = app || {};

app.Home_View = Backbone.View.extend({
	tagName: 'section',
	className: 'home_content',	
	template: _.template( $('#tpl_home').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template() );
		return this;
	}
});

app.Home_Item_View = Backbone.View.extend({
	className: 'home_item',	
	template: _.template( $('#tpl_home_item').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	}
});

app.Home_Empty_View = Backbone.View.extend({
	className: 'home_empty',	
	template: _.template( $('#tpl_home_empty').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template() );
		return this;
	}
});