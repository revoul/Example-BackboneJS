'use strict';

var app = app || {};

app.Consultant_Model = Backbone.Model.extend({
	defaults : {
		name : '',
		surname : '',
		age : ''
	},
	MINIMUM_AGE : 18,
	validate : function (attributes, options) {
		var _errors = {};
		_errors = this._validFunctions(this, _errors, attributes.name, 'name', [this._validExist, this._validString]);
		_errors = this._validFunctions(this, _errors, attributes.surname, 'surname', [this._validExist, this._validString]);
		_errors = this._validFunctions(this, _errors, attributes.age, 'age', [this._validExist, this._validNumber, this._validateAdult]);
		if(_.keys(_errors).length > 0) return _errors;
	},
	_validFunctions :  function (_this, _object, _attr, _name, _funcs) {
		for(var _a = 0; _a < _funcs.length; _a ++){
			var _error = _funcs[_a](_attr, _this);
			if(!!_error){
				_object[_name] = _error;
				_a = _funcs.length;
			}
		}
		return _object;
	},
	_validateAdult : function (_attr, _this) {
		return (_attr < _this.MINIMUM_AGE) ? 'Debe ser mayor de '+_this.MINIMUM_AGE+'.' : null;
	},
	_validExist : function (_attr){
		return (_attr == null || _attr == '') ? 'No puede ser vacío.' : null;
	},
	_validString : function (_attr){
		return (!_.isString(_attr)) ? 'Debe ser String.' : null;
	},
	_validNumber : function (_attr){
		return (!$.isNumeric(_attr)) ? 'Debe ser numerico.' : null;
	},

});