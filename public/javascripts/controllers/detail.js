angular.module('myApp')
.controller('detailCtrl', function($scope,$mdBottomSheet) {
	$scope.showGridBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			templateUrl: '/views/partials/bottom-sheet-grid-template.html',
			controller: 'GridBottomSheetCtrl',
			targetEvent: $event
		}).then(function(clickedItem) {
			$scope.alert = clickedItem.name + ' clicked!';
		});
	};
})
