let Observer = (function(){
    let _messages = {};
    return {
        regist: function(type, fn) {
            if(typeof _messages[type] === 'undefined'){
                _messages[type] = [fn];
            }else{
                _messages[type].push(fn);
            }
        },
        fire: function(type, args) {
            if(!_messages[type]){
                return;
            }
            let params = {
                type:type,
                args: args||[]
            };
            for(let i=0;i<_messages[type].length;i++){
                _messages[type][i].call(this, params);
            }
        },
        remove: function(type, fn) {
            if(!_messages[type]){
                return;
            }
            if(_messages[type] instanceof Array){
                for(let i=_messages[type].length-1;i>=0;i--){
                    _messages[type][i] === fn&&_messages[type].splice(i,1);
                }
            }
        }
    }
})();

// Observer.regist('test',function(e){
//     console.log(e.type, e.args.msg);
// });
// Observer.fire('test', {msg: 'arguments'});
let Student = function(result) {
    let that = this;
    that.result = result;
    that.say = function() {
        console.log(that.result);
    }
}
Student.prototype = {
    answer : function(question){
        Observer.regist(question, this.say);
    },
    sleep: function(question) {
        console.log(`${this.result} ${question} is removed`);
        Observer.remove(question, this.say);
    }
}
let Teacher = function() {}
Teacher.prototype = {
    ask: function(question){
        console.log('question is '+question);
        Observer.fire(question);
    }
}
let st1 = new Student('1 answer'),
    st2 = new Student('2 answer'),
    st3 = new Student('3 answer');
st1.answer('what sheji');
st1.answer('what sufa');
st2.answer('what sufa');
st3.answer('what sheji');
st3.sleep('what sheji');
let teacher = new Teacher();
teacher.ask('what sheji');
teacher.ask('what sufa');

