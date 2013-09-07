define(['knockout'], function(ko) {
	'use strict';
	return {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			//add init logic here
			//see http://knockoutjs.com/documentation/custom-bindings.html for more info
		},
		update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			//add update logic here
			//sample for scaffolding purposes
			element.value = ko.unwrap(valueAccessor());
		}
	};
});
