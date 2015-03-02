angular.module('myApp')
	.controller('loginCtrl', function(mePageLoading){
		mePageLoading.show('random');
	    setTimeout(function(){
	        mePageLoading.hide();
	    }, 1000);
	});
