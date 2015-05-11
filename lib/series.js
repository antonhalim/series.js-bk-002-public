'use strict';

var Series = function(number){
  var digits = [];
  number.split("").forEach(function(element){digits.push(parseInt(element));});
  this.digits = digits;
};

Series.prototype.slices = function(num){
  var digits = this.digits
  if(num > digits.length){throw new Error('Slice size is too big.')}
  var results = [];
  for(var i = 0; i < (digits.length - num + 1); i++){
    var innerArray = [];
    for(var k = 0; k < num; k++){
      innerArray.push(digits[i+k])
    }
    results.push(innerArray);
  }
  return results;
};
