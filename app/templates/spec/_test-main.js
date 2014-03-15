require.config({
  baseUrl: 'base/', //karma servers files from base
  paths: {
    knockout: 'bower_components/knockout.js/knockout'
  }
});

require(['helper', 'tests/<%=name%>'], window.__karma__.start);
