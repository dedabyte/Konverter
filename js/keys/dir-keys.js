(function(){

  konverter.directive('kKeys', function kKeys(){
    return {
      replace: true,
      scope: {
        model: '=kKeys'
      },
      templateUrl: 'js/keys/dir-keys-tpl.html',
      controller: 'KeysController',
      controllerAs: 'keys',
      bindToController: true
    };
  });

})();