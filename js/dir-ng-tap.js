(function(){

  konverter.directive('ngTap', function ngTap(){
    return function (scope, element, attrs) {
      var longTapLength = 400,
          longTapTimeout;

      function applyLongTap(){
        scope.$apply(attrs['long'], element);
      }

      element.bind('touchstart', function () {
        longTapTimeout = setTimeout(applyLongTap, longTapLength);
        element.addClass('active');
      });

      element.bind('touchend', function () {
        clearTimeout(longTapTimeout);
        element.removeClass('active');
        scope.$apply(attrs['ngTap'], element);
      });
    };
  });

})();