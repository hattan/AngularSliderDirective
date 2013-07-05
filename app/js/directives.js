'use strict';

/* Directives */

angular.module('myApp.directives', []);
angular.module('myApp.directives')
	.directive('slider', function () {
		return{
			restrict: 'E',
            replace:true,
            scope: {  target: '=value' },
			template: '<div class="slide"></div>',
            controller : function($scope,$element,$attrs,$rootScope){
                var step = $attrs.step,
                    max = $attrs.max,
                    min = $attrs.min,
                    ranges = angular.fromJson($attrs.ranges),
                    value = 0;
               
                $element.slider({
                    min: min,
                    max: max,
                    step : step,
                    change: function( event, ui ) {

                    }
                });   

                function applyBackgroundColor($elem,range){
                    var length = range.to-range.from,
                        $newDiv = $('<div style="margin-left:' + range.from + 'px;" class="slide-back"></div>');
                    
                    $newDiv.width(length).css('background',range.color);
                    $elem.append($newDiv);
                }

                $.each(ranges, function(index, range) {
                    applyBackgroundColor($element,range);
                })

                $scope.target = 250;
            },
			link: function (scope, elem, attrs) {}
		}
	});
