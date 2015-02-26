angular.module('myApp')
	.controller('detailCtrl', function($scope, House, $stateParams) {
		House.getDetail($stateParams.id).success(function(res) {
			$scope.data = res;
			House.trans($scope.data);
			var myGeo = new BMap.Geocoder();
			var lng, lat;
			var address = $scope.data.address.city + $scope.data.address.state + $scope.data.address.road;
			// 将地址解析结果显示在地图上
			myGeo.getPoint(address, function(point) {
				if (point) {
					lng = point.lng;
					lat = point.lat;
					var mapOption = {
						mapType: BMAP_NORMAL_MAP,
						maxZoom: 18,
						drawMargin: 0,
						enableFulltimeSpotClick: true,
						enableHighResolution: true
					};
					var map = new BMap.Map("map", mapOption);
					var pointData = new BMap.Point(lng, lat);
					map.centerAndZoom(pointData, 18);
					var marker = new BMap.Marker(pointData);
					marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
					map.addOverlay(marker);

					var stCtrl = new BMap.PanoramaControl(); //构造全景控件
						stCtrl.setOffset(new BMap.Size(20, 20));
						map.addControl(stCtrl);//添加全景控件
				}
			});
		});
		$scope.call = '联系房东';
		$scope.getPhone = function() {
			$scope.call = 'tel: ' + $scope.data.phone;
		}
	});
