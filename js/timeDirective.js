var app = angular.module('time-app'); 

app.directive('showTime', function(){ /*remember to make these directive names camel case*/
	return{
		restrict: 'EA', 
		template: '<div>Current Time {{time}}</div>',
		link: function(scope, element, attr){
			console.log(scope); 
			var currentTime = new Date(); 
			scope.time = currentTime.toString(); 
			}
		}
	}
);