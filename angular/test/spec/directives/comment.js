'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('comment'));

  var test1,test2,test3,test4, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    var now = new Date().getTime();
    var time1 = now - 30*1000;
    var time2 = now - 6.1*60*1000;
    var time3 = now - 7.6*60*60*1000;
    var time4 = now - 12.3*24*60*60*1000;
    test1 = angular.element('<comment-model author="Santiago" update-time="'+time1+'">hola</comment-model>');
    test1 = $compile(test1)(scope);
    test2 = angular.element('<comment-model author="Santiago" update-time="'+time2+'">hola</comment-model>');
    test2 = $compile(test2)(scope);
    test3 = angular.element('<comment-model author="Santiago" update-time="'+time3+'">hola</comment-model>');
    test3 = $compile(test3)(scope);
    test4 = angular.element('<comment-model author="Santiago" update-time="'+time4+'">hola</comment-model>');
    test4 = $compile(test4)(scope);
    scope.$digest();
  }));

  it('should render the author', function (){
    expect(test1.find('h2').html()).toBe('Santiago');
  });

  it('should render the msg', function (){
    expect(test1.find('span').html()).toBe('hola');
  });

  it('should render time less than 1 min',function(){
    expect(test1.find('h6').html()).toBe('1 minute ago');
  });

  it('should render time more than 1 min less than 1 hour',function(){
    expect(test2.find('h6').html()).toBe('7 minutes ago');
  });

  it('should render time more than more than 1 hour less than 1 day',function(){
    expect(test3.find('h6').html()).toBe('8 hours ago');
  });

  it('should render time more than more than 1 day',function(){
    expect(test4.find('h6').html()).toBe('13 days ago');
  });
});