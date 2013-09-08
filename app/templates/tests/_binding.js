define(['knockout', 'src/<%=name%>'], function(ko, <%= name %>) {

	module('<%=prettyName%>', {
		fixture: '<input id="input" data-bind="<%=name&>:obs">',,
		setup: function() {
			ko.bindingHandlers.<%= name %> = <%= name %>;
			this.input = $('#input');
			this.viewModel = {
				obs: ko.observable()
			};
			ko.cleanNode(document.body);
			ko.applyBindings(this.viewModel);
		},
		teardown: function() {
			delete ko.bindingHandlers.toggle;
		}
	});

	test('It exists!', function() {
		ok(<%= name %>);
	});

});
