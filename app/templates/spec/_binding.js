define(['knockout', 'src/<%=name%>'], function(ko, <%= prettyName %> ) {

  describe('<%=prettyName%>', function() {

    var viewModel;

    beforeEach(function() {
      document.body.innerHTML = '<input id="input" data-bind="<%=name%>:obs">';

      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(this.viewModel, document.body);
    });

    afterEach(function() {
      ko.cleanNode(document.body);
    });

    it('should be tested', function() {
      expect(true).to.be.false();
    });

  });

});
