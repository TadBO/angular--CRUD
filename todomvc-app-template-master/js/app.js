(function (window, angular) {
	//'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('todoApp', []);
	app.controller('todoCtrl', function ($scope) {
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
    });

})(window, angular);
