(function(){

  konverter.controller('KeysController', function KeysController(){
    var self = this;

    function addChar(char){
      self.model.push(char);
    }

    function addDot(){
      if(self.model.indexOf('.') < 0){
        self.model.push('.');
      }
    }

    function removeChar(){
      self.model.pop();
    }

    function removeAllChars(){
      self.model.splice(0);
    }

    // PUBLIC
    self.addChar = addChar;
    self.addDot = addDot;
    self.removeChar = removeChar;
    self.removeAllChars = removeAllChars;

  });

})();