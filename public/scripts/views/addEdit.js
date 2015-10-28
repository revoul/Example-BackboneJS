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
	},
	events : {
		'click #btnCancelar' : '_goHome',
		'click #btnAceptar' : '_saveModel'
	},
	_goHome : function () {
		Backbone.history.navigate('', {trigger : true})
	},
	_saveModel : function () {
		this.model.set({
			name : $('#name').val(),
			surname : $('#surname').val(),
			age : $('#age').val()
		});
		if(this.model.isValid()){
			app.Consultant_Controller.trigger('saveModel', this.model);
		}else{
			var _inputs = {name : '', surname : '', age : ''};
			_.extend(_inputs, this.model.validationError);
			_.each(_inputs, function(_string, _name){
				var _set = (_string != '') ? 'invalid' : 'valid';
				var _rem = (_string == '') ? 'invalid' : 'valid';
				$('#'+_name).addClass(_set).removeClass(_rem);
				$('#'+_name).next().attr('data-error', _string);
			});
		}
	}
});