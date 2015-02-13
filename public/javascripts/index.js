/**
 * myApp Module
 *
 * Description
 */
var myApp = angular.module('myApp', ['ngMaterial']);
myApp.controller('headCtr', function($scope) {

	})
	.config(function($mdThemingProvider) {
		// Configure a dark theme with primary foreground yellow
		$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('grey')
			.dark();
	});;
