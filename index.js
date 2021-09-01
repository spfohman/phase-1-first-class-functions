function add(num1, num2){
    return num1+num2;
}



function greeting(name) {
    alert('Hello ' + name);
  }
  
function receivesAFunction(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
 


function returnsANamedFunction(){
    return add;
}
function returnsAnAnonymousFunction(){
    return x=>x+1;
}
