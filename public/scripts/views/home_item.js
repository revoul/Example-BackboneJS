app.Home_Item_View = Backbone.View.extend({
	className: 'home_item',	
	template: _.template( $('#tpl_home_item').html() ),
	initialize: function(){},
	render: function(){
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	},
	events : {
    	'click .hrefRemove' : '_removeModel',
    	'click .hrefEdit' : '_goEdit'
	},
	_removeModel : function () {
		app.Consultant_Controller.trigger('removeModel', this.model);
		this.remove();
	},
	_goEdit : function () {
		Backbone.history.navigate('edit/'+this.model.id, {trigger : true});
	}
});