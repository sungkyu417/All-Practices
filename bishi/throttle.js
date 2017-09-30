var throttle = function() {
    var isClear = arguments[0],fn;
    if(typeof isClear === 'boolean'){
        fn = arguments[1];
        fn._throttleID&&clearTimeout(fn._throttleID);
    }else{
        fn = isClear;
        param = arguments[1];
        var p = extend({
            context:null,
            args:[],
            time:300
        },param);
        arguments.callee(true,fn);
        fn._throttleID = setTimeout(function(){
            fn.apply(p.context,p.args);
        },p.time);
    }
}
function extend(){
    var exist = arguments[0],
    add = arguments[1];
    if(typeof add === 'object'){
        for(var key in add){
            exist[key] = add[key];
        }
    }
    return exist;
}