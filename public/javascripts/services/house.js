angular.module('myApp')
	.factory('House', function($http, $state) {

		return {
			publish: function(data) {
				$http.post('/new', {
					house: data
				})
				.success(function(res) {
					if (res === 'suc') {
						alert("发布成功");
						$state.go('list');
					}
				});
			},
			getDetail: function(id) {
				return $http.post('/getHouseDetail', {id: id});
			},
			search: function(info) {
				return $http.post('/search', info);
			},
			getHomeInfo: function(userId) {
				return $http.post('/getHomeInfo', {id: userId});
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
