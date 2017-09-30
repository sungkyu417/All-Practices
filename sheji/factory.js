let Factory = function(type, content){
    if(this instanceof Factory){
        let s= this[type](content);
        return s;
    }else{
        return new Factory(type, content);
    }
}
Factory.prototype = {
    java: function(content) {
        console.log(content);
    },
    js: function(content) {
        console.log(content);
    },
    ui: function(content) {
        this.content = content;
        (function(content){
            let div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content)
    }
}
let data = [
    {type:'java', content:'java'},
    {type:'js', content:'js'}
];
data.forEach(item => {
    Factory(item.type, item.content);
});