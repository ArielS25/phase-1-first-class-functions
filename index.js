function  receivesAFunction(callback){
 callback();
}
function returnsANamedFunction() {
    function myNamedFunction() {
    }
    return myNamedFunction;
  }
 const returnsAnAnonymousFunction = ()=> {return function (){};}