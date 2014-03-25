# <%=prettyName%> binding for knockout

[![Build status](https://travis-ci.org/<%=username%>/knockout.bindingHandlers.<%=name%>.png)](https://travis-ci.org/<%=username%>/knockout.bindingHandlers.<%=name%>)

## Usage

HTML

    <input data-bind="<%=name%>: myobs" >

JS

    ko.applyBindings({
        myobs : ko.observable()
    });


This binding is written in AMD. It returns the binding object. It will attach itself to `knockout.bindingHandlers.<%=name%>` once required for the first time. This can be overridden with a config section in your requirejs config like shown below.

```
requirejs.config({
  config: {
    'bower_components/knockout.bindingHandlers.<%=name%>/src/<%=name%>': {
        name: 'someOtherName'
    }
  }
});
```

## Behaviour

TODO:

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install & bower install

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
