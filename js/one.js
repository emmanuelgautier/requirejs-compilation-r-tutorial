(define(['two', 'three'], function(two, three) {
  'use strict';

  var one = {};

  one.say = function() {
    console.log('one');
  };

  one.sayForTwo = function() {
    two.say();
  };

  one.sayForThree = function() {
    three.say();
  };

  return one;
}));
