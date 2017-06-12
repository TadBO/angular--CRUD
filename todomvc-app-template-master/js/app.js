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
		}, true);

    }]);

})(window, angular);
