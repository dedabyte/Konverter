(function(){

  konverter.controller('AppController', function AppController($scope){

    $scope.ratio = 0.41;
    $scope.invert = false;
    $scope.mainKeysModel = [];

    $scope.mainFrom = '';
    $scope.mainTo = '';

    $scope.$watch('mainKeysModel', function(nv){
      var fromTo = calculate(nv, $scope.ratio, $scope.invert);
      $scope.mainFrom = fromTo.from;
      $scope.mainTo = fromTo.to;
    }, true);

    function calculate(arr, ratio, invert){
      if(invert){
        ratio = 1 / ratio;
      }
      var inputValue = parseFloat(arr.join(''));
      if(isNaN(inputValue)){
        return { from: '', to: '' };
      }else{
        return {
          from: inputValue,
          to: (inputValue * ratio).round()
        };
      }
    }

  });

})();