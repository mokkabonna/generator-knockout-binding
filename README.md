# generator-knockout-binding

> [Yeoman](http://yeoman.io) generator for scaffolding an AMD based knockout binding


## Getting Started

If you don't have yeoman

```
$ npm install -g yo
```

To install generator-knockout-binding from npm, run:

```
$ npm install -g generator-knockout-binding
```

Finally, initiate the generator:

```
$ yo knockout-binding
```


Generates a standalone AMD based knockout binding with ready test setup, bower config, travis config, README, Grunt tasks, jshint config, editorconfig etc. See the list below for bindings that was created using this. 

- [knockout.bindinghandlers.hidden](https://github.com/mokkabonna/knockout.bindinghandlers.hidden) 
- [knockout.bindinghandlers.toggle](https://github.com/mokkabonna/knockout.bindinghandlers.toggle) 
- [knockout.bindinghandlers.number](https://github.com/mokkabonna/knockout.bindinghandlers.number) 
- [knockout.bindinghandlers.readonly](https://github.com/mokkabonna/knockout.bindinghandlers.readonly) 



This was inspired by all the bindings randomly floating around on jsfiddle and similar sites. Let's get them tested and easily installable through bower! Don't forget to register your binding on bower so we can all use it! :) Remember to use [semver](http://semver.org/).

## Update subgenerator

```
yo knockout-binding:update
```

This is if you want to keep up to date with with infrastructure things that is updated to the generator. This are the following files:

- package.json
- karma.conf.js
- Gruntfile.js
- .travis.yml
- .editorconfig
- .gitignore
- .jshintrc
- spec/.jshintrc

If you do modifications to these you will get those overwritten. But by running `git add -p` you can stage only the changes you want. It's mostly meant as a convenience if you want to stay current with npm dependencies, minor tweaks etc. This allows you to focus on the binding code and not the stuff around it for testing etc. That's what generators are for.

## Grunt tasks

### develop 

This is what you should run to get started ASAP. Starts test server, and watches your scripts, reporting you of any jshint errors or test fails as you save.

### test 

Run the tests a single time

### test:full 

Runs the tests once for all released versions of the dependencies listed in bower.json using [grunt-bower-verify](https://github.com/mokkabonna/grunt-bower-verify)

This is the task that is run if you enable build in travis, this can take a while. But this is important for components that use both your binding and knockout, jquery etc. to know that your binding is in fact compatible with the versions listed in the bower.json. Try to be as liberal as you can in setting your binding dependencies. This allows for more compatible bindings and since this is automated you can let travis and grunt-bower-verify do the heavy lifting for you.


## License

I don't care, feel free.

http://readwrite.com/2013/05/15/open-source-is-old-school-says-the-github-generation#awesm=~ozy0fjR3O4ipCR


