app.Home_Empty_View = Backbone.View.extend({
	className: 'home_empty',	
	template: _.template( $('#tpl_home_empty').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template() );
		return this;
	}
});