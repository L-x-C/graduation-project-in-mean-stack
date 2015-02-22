angular.module('myApp')
.controller('detailCtrl', function($scope) {
	$scope.address = {
		city: '上海市',
		state: '杨浦区',
		road: '国定东路200号'
	}
	var myGeo = new BMap.Geocoder();
	var lng, lat;
	var address = $scope.address.city + $scope.address.state + $scope.address.road;
	// 将地址解析结果显示在地图上，并调整地图视野   
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
			}
			var map = new BMap.Map("map", mapOption);
			var point = new BMap.Point(lng, lat);
			map.centerAndZoom(point, 18);
			var marker = new BMap.Marker(point);
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			map.addOverlay(marker);

			var stCtrl = new BMap.PanoramaControl(); //构造全景控件
				stCtrl.setOffset(new BMap.Size(20, 20));
				map.addControl(stCtrl);//添加全景控件

		}
	});


})
