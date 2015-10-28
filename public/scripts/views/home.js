'use strict';

var app = app || {};

app.Home_View = Backbone.View.extend({
	tagName: 'section',
	className: 'home_content',	
	template: _.template( $('#tpl_home').html() ),
	render: function(){
		this.$el.html( this.template() );
		var _container = this.$el.find('#main-collection');
	    if(this.collection.length > 0){
		    _.each(this.collection.models, function(_modelo) {
		        var _item_view = new app.Home_Item_View({
		            model: _modelo
		        });
		        _container.append(_item_view.render().$el);
		    });
	    }else _container.append(new app.Home_Empty_View().render().$el);

		return this;
	},
	events : {
		'click #add' : '_goAdd'
	},
	_goAdd : function () {
		Backbone.history.navigate('add', {trigger : true});
	},
	_validEmpty : function () {
		console.log('entro: '+this.collection.length);
	}
});