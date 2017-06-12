(function (angular) {
    var app = angular.module('myFocus', []);
    app.directive('setFocus', function () {
        return {
            link: function (scope, ele, attrs) {
                scope.addFocus = function () {
                    ele[0].focus();
                }
            }
        }
    })
})(angular)
