angular.module('myApp')
	.directive('houseDel', function(House){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<button ng-click="delHouse()" data-houseId="{{house._id}}" class="md-raised md-warn md-button md-default-theme md-del">删除</button>',
			// templateUrl: '',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				$scope.delHouse = function() {
					var houseId = iAttrs.houseid;
					House.delHouse(houseId).success(function(res) {
						$scope.$emit('delThisHouse', houseId);
					});
					
				}
			}
		};
	});