(function (window, angular) {
	//'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('todoApp', []);
	app.controller('todoCtrl', ['$scope', '$filter', function ($scope, $filter) {
		//确定数据为数组类型
		$scope.todoList = [
			{text: 'css', status: false},
			{text: 'html', status: false},
			{text: 'javascript', status: false},
			{text: 'angular', status: true}
		];
		//查看数据
		//增加数据
		$scope.newTodo = '';
		$scope.addTodo = function () {
			$scope.todoList.push({text: $scope.newTodo, status: false});
            $scope.newTodo = '';
        }
        //删除数据
		$scope.deleteTodo = function (todo) {
			var index = $scope.todoList.indexOf(todo);
			$scope.todoList.splice(index, 1);
        }
        //修改数据以及当前状态的样式
		$scope.editing = {};
		$scope.updateTodo = function (todo) {
            $scope.editing = todo;
        }
        $scope.saveTodo = function () {
            $scope.editing = {};
        }
        //未完成的数据统计
		$scope.todoCount = 0;
		$scope.$watch('todoList', function (newVals, oldVals) {
            $scope.todoCount = $filter('filter')(newVals, {status: false}).length;
            $scope.toggleTodo = !$scope.todoCount;
		}, true);
		//清除所有完成数据
		$scope.clearCompleted = function () {
			$scope.todoList = $filter('filter')($scope.todoList, {status: false});
        }
		//过滤数据，统计各状态数据并更改相应样式
		$scope.status = undefined;
		$scope.changeTodo = function (status) {
            $scope.status = status;
        }
        //全选与全不选
		$scope.toggleAll = function () {
			$scope.todoList.forEach(function (value) {
				value.status = !$scope.toggleTodo;
			})
        }
    }]);

})(window, angular);
