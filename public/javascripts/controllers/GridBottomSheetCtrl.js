angular.module('myApp')
.controller('GridBottomSheetCtrl', function($scope,$mdBottomSheet) {
	$scope.items = [
	    { name: 'Hangout', icon: 'hangout' },
	    { name: 'Mail', icon: 'mail' },
	    { name: 'Message', icon: 'message' },
	    { name: 'Copy', icon: 'copy' },
	    { name: 'Facebook', icon: 'facebook' },
	    { name: 'Twitter', icon: 'twitter' },
	  ];
	  $scope.listItemClick = function($index) {
	    var clickedItem = $scope.items[$index];
	    $mdBottomSheet.hide(clickedItem);
	  };
})
