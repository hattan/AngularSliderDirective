'use strict';

/* Directives */

angular.module('myApp.directives', []);
angular.module('myApp.directives')
	.directive('slider', function () {
	 return {
        restrict:'E',
        scope: {
          ngModel: '=',
          onChanged: '&'
        },
        replace: true,
        template:'<div class="slide"></div>',
        require: 'ngModel',
        link:function(scope,element,attrs){
             var step = attrs.step,
                    max = attrs.max,
                    min = attrs.min,
                    ranges = angular.fromJson(attrs.ranges),
                    applyBackgroundColor = function($elem,range){
                        var length = range.to-range.from,
                            $newDiv = $('<div style="margin-left:' + range.from + 'px;" class="slide-back"></div>');
                    
                        $newDiv.width(length).css('background',range.color);
                        $elem.append($newDiv);
                    };


           scope.$watch('ngModel', function(newVal, oldVal){
             if (newVal !== undefined){
               element.slider("value", parseInt(newVal,10));
             }
           });
          
           element.width(attrs.max).slider({
              min: parseInt(attrs.min,10),
              max: parseInt(attrs.max, 10),
              value: scope.ngModel,
              step: parseInt(attrs.step, 10)
            });
            
            element.bind( "slide",function( event, ui ) {
              scope.ngModel = ui.value;
              scope.$apply();
            });
            
            $.each(ranges, function(index, range) {
                applyBackgroundColor(element,range);
            })

            if ('onChanged' in attrs){
              element.bind( "slidechange", function(event, ui){
                  scope.onChanged()(ui.value);              
              });
            }
        }
    };
	});
