/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"b23c234/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
