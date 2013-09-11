(function() {

	require.config({
		baseUrl: 'base/', //karma servers files from base
		paths: {
			knockout: 'lib/knockout.js/knockout',
			jquery: 'lib/jquery/jquery'
		}
	});

	require(['helper', 'tests/<%=name%>'], function() {
		window.__karma__.start();
	});

})();
