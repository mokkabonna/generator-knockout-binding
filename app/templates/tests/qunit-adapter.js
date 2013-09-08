(function(window) {

	QUnit.config.autostart = false;

	var createQUnitStartFn = function() {
		var tc = window.__karma__;
		window.QUnit.start();

		var totalNumberOfTest = 0;
		var timer = null;
		var testResult = {};

		QUnit.done(function() {
			tc.info({
				total: totalNumberOfTest
			});
			tc.complete({
				coverage: window.__coverage__
			});
		});

		QUnit.testStart(function() {
			totalNumberOfTest += 1;
			timer = new Date().getTime();
			testResult = {
				success: true,
				errors: []
			};
		});

		QUnit.log(function(details) {
			if (!details.result) {
				var result = details.message ? [details.message] : ['Assert failed'];
				if (details.hasOwnProperty('actual')) result.push('Actual: \033[0;31m' + details.actual + '\033[0m');
				if (details.hasOwnProperty('expected')) result.push('Expected:  \033[0;32m' + details.expected + '\033[0m');
				if (details.hasOwnProperty('source')) result.push('\033[2;37m' + details.source + '\033[0m');
				testResult.success = false;
				testResult.errors.push(result.join('\n') + '\n');
			}
		});

		QUnit.testDone(function(test) {
			var result = {
				description: test.name,
				suite: [test.module + ' - '] || [],
				success: testResult.success,
				log: testResult.errors || [],
				time: new Date().getTime() - timer
			};

			tc.result(result);
		});

	};

	window.__karma__.start = createQUnitStartFn;

})(window);
