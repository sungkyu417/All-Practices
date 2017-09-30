function hefa(str) {
    if(!str){
        return true;
    }else{
        var left = [];
        var right = [];
        for(var i=0;i<str.length;i++){
            if(str[i] === '('){
                left.push(str[i]);
            }else{
                right.push(str[i]);
            }
        }
        if(left.length === right.length){
            return true;
        }else{
            return false;
        }
    }
}

function count(str) {
    for(var i=0;i<str.length;){
        var temp = str.replace(str[0],'');
        for(var j=0;j<temp.length;){
            var cur = temp;
            if(temp[j] === ')'){
                cur.replace(temp[j],'');
                if(hefa(cur)){
                    nums++;
                    count(cur);
                }
            }
        }
        if(nums === 0){
            break;
        }else{
            i++;
        }
    }
}