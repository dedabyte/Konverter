Number.prototype.round = function (decimals) {
  if (decimals) {
    var pow = Math.pow(10, decimals);
    return Math.round(this * pow) / pow;
  }
  else return Math.round(this * 100) / 100;
};

var konverter = angular.module('app', []);