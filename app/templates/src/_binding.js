define(['knockout', 'module'], function(ko, module) {
  'use strict';

  var bindingName = module.config().name || '<%= name %>';

  ko.bindingHandlers[bindingName] = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      //add init logic here
      //see http://knockoutjs.com/documentation/custom-bindings.html for more info
    },
    update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      //add update logic here
      //sample for scaffolding purposes
      element.value = ko.utils.unwrapObservable(valueAccessor());
    }
  };
});
