# <%=prettyName%> binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.<%=name%>.png)](https://travis-ci.org/<%=username%>/knockout.bindingHandlers.<%=name%>)

## Usage

HTML

	<input data-bind="<%=name%> : myobs" >

JS

	ko.applyBindings({
		myobs : ko.observable()
	});


This binding is written in AMD. It returns the binding object. You need to attach it yourself since this allows it to coexist with other possible bindings named <%=name%>. This will only need to be done once as it will then be attached to the knockout module.

	define(['knockout', 'somefolder/<%=name%>'], function(ko, <%=name%>){
		ko.bindingHandlers.<%=name%> = <%=name%>;
		//use knockout
	});

## Behaviour

TODO:

### valueUpdate


## Demo

There is a demo at http://<%=username%>.github.io/knockout.bindingHandlers.<%=name%>

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install
    grunt bower //this is to install all bower packages

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
