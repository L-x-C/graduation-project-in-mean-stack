/**
 * myApp Module
 *
 * Description
 */
angular.module('myApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
	// Configure a dark theme with primary foreground yellow
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('grey')
		.dark();
});
