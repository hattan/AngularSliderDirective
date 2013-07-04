'use strict';

/* Directives */

angular.module('myApp.directives', []);
angular.module('myApp.directives')
	.directive('slider', function () {
		return{
			restrict: 'E',
            scope: {  target: '=value' },
			template: '<input type="range" max="{{max}}" min="{{min}}" step="{{step}}" ng-model="target">',
            controller : function($scope,$element,$attrs,$rootScope){
                var step = $attrs.step,
                    max = $attrs.max,
                    min = $attrs.min,
                    ranges = angular.fromJson($attrs.ranges);

                $scope.max = max;
                $scope.min = min;
                $scope.step = step;
                $scope.rangeValue = 10;
            },
			link: function (scope, elem, attrs) {}
		}
	});
