function Bird (){
  this.koo = function(){
    console.log('kookoo');
  };
  this.canFly = function(){
    return false;
  }
}
let duck = new Bird();

let funModule= (function (){
  return {
    isCuteMixin:function(obj) {
      obj.isCute = function() {
      return true;
    };
  },
   singMixin: function(obj) {
      obj.sing = function() {
    console.log("Singing to an awesome tune");
    };
  }
  }
  })();

 funModule.singMixin(duck);
 duck.sing(); 
 duck.koo();
 funModule.isCuteMixin(duck);

  console.log(Object.getOwnPropertyNames(duck));
