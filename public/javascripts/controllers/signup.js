angular.module('myApp')
	.controller('signupCtrl', function(mePageLoading){
		mePageLoading.show('random');
	    setTimeout(function(){
	        mePageLoading.hide();
	    }, 1000);
	});
