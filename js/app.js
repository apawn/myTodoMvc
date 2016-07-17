(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!\
	var myApp = angular.module("phApp", []);
	myApp.controller("todoController", function ($scope) {
		$scope.todolist = [
			{ id: 1, name: " 吃饭", complete: false },
			{ id: 2, name: " 睡觉", complete: true },
			{ id: 3, name: " 打豆豆", complete: false },
		];
		$scope.newId = $scope.todolist.length;
		// 添加
		$scope.add = function () {
			$scope.todolist.push({
				id: ++($scope.newId),
				name: $scope.addText,
				complete: false
			});
			$scope.addText = "";
		}
		// 删除
		$scope.remove = function (id) {
			var index;
			for (var i = 0; i < $scope.todolist.length; i++) {
				if ($scope.todolist[i].id === id) {
					index = i;
					break;
				}
			}
			$scope.todolist.splice(i, 1);
		}

		//删除全部
		$scope.clearAll = function () {
			var list = [];
			for (var i = 0; i < $scope.todolist.length; i++) {
				if (!$scope.todolist[i].complete) {
					list.push($scope.todolist[i]);
				}
			}
			$scope.todolist = list;
		};

		// 切换全选和全不选
		var flag = false;
		$scope.toggleAll = function () {
			for (var i = 0; i < $scope.todolist.length; i++) {
				$scope.todolist[i].complete = flag;
			}
			flag = !flag;
		};

		// 编辑
		$scope.currentIndex = -1;

		$scope.edit = function (index) {
			$scope.currentIndex = index;
		}

		$scope.saveEdit = function () {
			$scope.currentIndex = -1;
		}
	});

})(angular);
