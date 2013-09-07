/**
 * Module override for qunit to support fixtures. Appends any html to the page defined in the fixture property on the lifecycle object
 * Automatically removes html on teardown. Requires jquery as of now.
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
define(['jquery'], function($) {
	'use strict';
	var mod = QUnit.module;
	var self = this;

	module = function(name, lifecycle) {
		var self = this;
		if (lifecycle) {
			var setup = lifecycle.setup;
			var teardown = lifecycle.teardown;
			var fixture = $(lifecycle.fixture);
			lifecycle.setup = function() {
				if (fixture) $(document.body).append(fixture);
				if (typeof setup === 'function') setup.call(this); //call with current lifecycle
			};

			lifecycle.teardown = function() {
				fixture.remove();
				if (typeof teardown === 'function') teardown.call(this); //call with current lifecycle
			};
		}

		mod(name, lifecycle);
	};
});
