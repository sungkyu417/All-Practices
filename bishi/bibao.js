function Fun(){
    var i=0;
    return function(){
        console.log(i++);
    }
}
var f1 = Fun(),f2 = Fun();
f1();
f1();
f2();