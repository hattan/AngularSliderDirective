'use strict';

/* Directives */

angular.module('myApp.directives', []);
angular.module('myApp.directives')
	.directive('slider', function () {
		return{
			require: 'ngModel',
			restrict: 'E',
			template: '<input type="range" min="{{min}}" max="{{max}}" step="{{step}}" ng-model="sliderValue">',
			scope: {
				min: '@',
				max: '@',
				step: '@',
				ranges: '@',
				sliderValue: '=ngModel'
			},
			link: function (scope, elem, attrs) {
				var sliderRange = function (value) {
					for (var i = 0; i < scope.ranges.length; i++) {
						if ((value >= scope.ranges[i].from) && (value <= scope.ranges[i].to)) {
							// do logic to determine color here
						}
					}
				};
			}
		}
	});
