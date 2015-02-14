/**
 * myApp Module
 *
 * Description
 */
var myApp = angular.module('myApp', ['ngMaterial']);
myApp.config(function($mdThemingProvider) {
	// Configure a dark theme with primary foreground yellow
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('grey')
		.dark();
});
