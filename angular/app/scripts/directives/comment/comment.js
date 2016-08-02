'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', [])
  .filter('timeFilter',function(){
      return function(time){
          var now = new Date();
          var seconds = (now.getTime()-time)/1000;
          var minutes = seconds/60;
          var hours = minutes/60;
          var days = hours/24;
          if(seconds < 59){
              return '1 minute ago';
          }
          if(minutes < 59 ){
              return Math.ceil(minutes) + ' minutes ago';
          }
          if(minutes < (23*60+59)) {
              return Math.ceil(hours) + ' hours ago';
          }
          return Math.ceil(days) + ' days ago';
      };
  })
  .directive('commentModel', function () {
    return {
      template: '<div class="comment">' +
                  '<h2 class="commentAuthor">' +
                      '{{author}}' +
                  '</h2>' +
                  '<h6>{{updateTime|timeFilter}}</h6>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        updateTime:'@'
        author: '@',
      },
      link: function postLink(scope, element, attrs) {}
    };
  });