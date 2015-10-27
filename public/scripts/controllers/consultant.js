'use strict';

var app = app || {};


app.Controller =  function() {
	
	_.extend(this, Backbone.Events);	
	
	var _this = this;

	this.initialize = function () {
		this.Collection = new app.Consultants_Collection();
	};

	this.home = function (){
		var _view = new app.Home_View({
			collection : this.Collection,
			events : {
				'click #add' : function () {
					Backbone.history.navigate('add', {trigger : true});
				}
			}
		});

		$('.main_content').html( _view.render().$el);

		if(this.Collection.length > 0){
			setTimeout(function() {
			    var _collection_view = $('<div></div>');
			    _.each(_this.Collection.models, function(_modelo) {
			        var _item_view = new app.Home_Item_View({
			            model: _modelo,
			            events : {
			            	'click .hrefRemove' : function () {	
			            		this.model.destroy();
			            		_this.Collection.fetch();
			            		_this.home();
			            	}
			            }
			        });
			       _collection_view.append(_item_view.render().$el);
			    });
			    $('#main-collection').html(_collection_view);
			}, 1000);
		}else  $('#main-collection').html(new app.Home_Empty_View().render().$el);
	};

	this.addEdit = function (_item) {
		_item = (!!_item) ? _this.Collection.get(_item) : new app.Consultant_Model();
		var _view = new app.AddEdit_View({
			model : _item,
			events : {
				'click #btnCancelar' : function () {
					Backbone.history.navigate('', {trigger : true})
				},
				'click #btnAceptar' : function () {
					this.model.set({
						name : $('#name').val(),
						surname : $('#surname').val(),
						age : $('#age').val()
					});
					if(this.model.isValid()){
						_this.Collection.create(this.model);
						_this.Collection.fetch();
						Backbone.history.navigate('', {trigger : true});
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
			}
		});
		$('.main_content').html(_view.render().$el);
	};

	this.initialize();
};