let LazySingle = (function(){
    let _instance = null;
    function Single() {
        return {
            publicMethod: function(){},
            publicProperty: '1'
        }
    }
    return function() {
        if(!_instance){
            _instance = Single();
        }
        return _instance;
    }
})();
console.log(LazySingle().publicProperty);