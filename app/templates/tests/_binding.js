define(['knockout', 'src/<%=name%>'], function(ko, <%= name %>) {
	ko.bindingHandlers.<%= name %> = <%= name %>;

	module('<%=prettyName%>');
	test('It exists', function() {
		ok(<%= name %>);
	});

});
