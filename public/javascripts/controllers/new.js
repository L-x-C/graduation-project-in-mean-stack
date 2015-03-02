angular.module('myApp')
	.controller('newCtrl', function($scope, House, Auth, $upload, mePageLoading){
		mePageLoading.show('random');
		setTimeout(function() {
			mePageLoading.hide();
		}, 1000);
		$scope.data = {
			houseType: 'apartment',
			roomType: 'all',
			peopleNum: 1
		};
		$scope.publishHouse = function() {
			if (Auth.isLoggedIn()) {
				//moneyRange
				if ($scope.data.money <= 1000) {
					$scope.data.moneyRange = 1;
				} else if ($scope.data.money > 1000 && $scope.data.money <= 2000) {
					$scope.data.moneyRange = 2;
				} else if ($scope.data.money > 2000 && $scope.data.money <= 3000) {
					$scope.data.moneyRange = 3;
				} else {
					$scope.data.moneyRange = 4;
				}
				//areaRange
				if ($scope.data.area <= 50) {
					$scope.data.areaRange = 1;
				} else if ($scope.data.area > 50 && $scope.data.area <= 100) {
					$scope.data.areaRange = 2;
				} else if ($scope.data.area > 100 && $scope.data.area <= 150) {
					$scope.data.areaRange = 3;
				} else {
					$scope.data.areaRange = 4;
				}

				$scope.data.userId = Auth.get();
				House.publish($scope.data);
			} else {
				Auth.needLogin();
			}
		};

		$scope.data.imgUrl = [];
		$scope.uploadInfo = '拖动图片至此或单击上传';

		$scope.$watch('files', function() {
			$scope.upload($scope.files);
		});

		$scope.upload = function(files) {
			if (files && files.length) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					$upload.upload({
						url: 'upload/imgs',
						file: file
					}).progress(function(evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						$scope.uploadInfo = progressPercentage + '% ';
					}).success(function(data, status, headers, config) {
						console.log(data);
						$scope.data.imgUrl.push(data.file.path.split('\\').slice(1).join('/'));
					});
				}
			}
		};

	});
