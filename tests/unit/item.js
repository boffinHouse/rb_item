define([
	'intern!object',
	'intern/chai!expect',
	'intern/order!component-helpers/js/object-assign',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/rb-life.js',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/dom.js',
	'intern/order!sources/js/moduels/rb_item',
], function(registerSuite, expect) {
	var widgetElement, widget;

	registerSuite({
		name: 'item tests',
		setup: function () {},
		teardown: function () {},
		beforeEach: function () {
			widgetElement = document.createElement('div');
			document.body.appendChild(widgetElement);

			widget = rbLife.create(widgetElement, rbLife._behaviors.item);
		},
		afterEach: function () {},

		'basic tests': function() {
			expect(rbLife._behaviors.item, '').to.exist;
		},

	});
});
