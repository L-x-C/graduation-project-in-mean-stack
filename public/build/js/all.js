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
		};
	});

angular.module('myApp')
	.controller('listCtrl', function($scope, House){
		$scope.more =false;
		$scope.showMore = function() {
			$scope.more = !$scope.more;
		};
		House.get().success(function(res) {
			$scope.houseData = res;
			angular.forEach($scope.houseData, function(value,key) {
				House.trans(value);
			});
		});
	});

angular.module('myApp')
	.controller('indexCtrl', function($scope, Auth, House){
		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};

		$scope.isShow = false;
		$scope.showHowToUse = function() {
			$scope.isShow = !$scope.isShow;
		};
		$scope.closeHowToUse = function() {
			$scope.isShow = false;
		};

		//search
		$scope.search = function() {
			House.search();
		};
	});

angular.module('myApp')
	.controller('navCtrl', function($scope, Auth){
		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};
	});

angular.module('myApp')
	.controller('newCtrl', function($scope, House, Auth, $upload){
		$scope.data = {
			houseType: 'apartment',
			roomType: 'all',
			peopleNum: 1
		};
		$scope.publishHouse = function() {
			if (Auth.isLoggedIn()) {
				$scope.data.userId = Auth.get();
				console.log($scope.data);
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

angular.module('myApp')
	.factory('Auth', function($rootScope, $http, $cookieStore) {
		$rootScope.currentUser = $cookieStore.get('user') || null;

		return {
			isLoggedIn: function() {
				if ($rootScope.currentUser) {
					return $rootScope.currentUser;
				} else {
					return false;
				}
			},
			logOut: function() {
				$cookieStore.remove('user');
				location.reload();
			},
			needLogin: function() {
				window.location.href = '/#/signin';
			},
			get: function() {
				return $rootScope.currentUser._id;
			}
		};
	});

angular.module('myApp')
	.factory('House', function($http) {

		return {
			publish: function(data) {
				$http.post('/new', {
					house: data
				})
				.success(function(res) {
					if (res === 'suc') {
						alert("发布成功");
						window.location.href="/#/list";
					}
				});
			},
			get: function() {
				return $http.get('/getHouse');
			},
			getDetail: function(id) {
				return $http.post('/getHouseDetail', {id: id});
			},
			search: function() {
				$http.post('/search', {
					city: '上海市'
				}).success(function(res) {
					console.log(res);
				});
			},
			trans: function(data) {
				switch (data.houseType) {
					case 'apartment':
						data.houseType = '公寓';
						break;
					case 'independent':
						data.houseType = '独立屋';
						break;
				}
				switch (data.roomType) {
					case 'all':
						data.roomType = '整套房子';
						break;
					case 'seperate':
						data.roomType = '独立房间';
						break;
					case 'share':
						data.roomType = '合住房间';
						break;
				}

				data.realFacilities = [];
				for (var facility in data.facilities) {
					switch (facility) {
						case 'necessary':
							data.realFacilities.push('生活必需品');
							break;
						case 'tv':
							data.realFacilities.push('电视');
							break;
						case 'airConditioner':
							data.realFacilities.push('空调');
							break;
						case 'heat':
							data.realFacilities.push('暖气');
							break;
						case 'kitchen':
							data.realFacilities.push('厨房');
							break;
						case 'wifi':
							data.realFacilities.push('无线网络');
							break;
						case 'washer':
							data.realFacilities.push('洗衣机');
							break;
						case 'bathroom':
							data.realFacilities.push('浴室');
							break;
					}
				}

				data.realSpecials = [];
				for (var special in data.special) {
					switch (special) {
						case 'smoking':
							data.realSpecials.push('允许吸烟');
							break;
						case 'pets':
							data.realSpecials.push('允许养宠物');
							break;
						case 'party':
							data.realSpecials.push('允许举办派对');
							break;
						case 'bodyBuilder':
							data.realSpecials.push('健身房');
							break;
						case 'fireExtinguisher':
							data.realSpecials.push('灭火器');
							break;
						case 'barrierFree':
							data.realSpecials.push('无障碍设施');
							break;
					}
				}
			}
		};
	});
