function add(items) {
    var tr = document.createElement('tr');
    var tbody = document.getElementsByTagName('tbody')[0];
    var td1 = document.createElement('td');
    td1.textContent = items[name];
    var td2 = document.createElement('td');
    td2.textContent = items[price];
    var td3 = document.createElement('td');
    td3.innerHTML = '<a href="javascript:void(0);">删除</a>';
    tbody.appendChild(td1);
    tbody.appendChild(td2);
    tbody.appendChild(td3);
    calTotal(items[price], 1);
}
// 计算价格，type为1增加，type为2减少
function calTotal(itemPrice, type) {
    var priceStr = document.getElementsByTagName('tfoot').getElementsByTagName('td')[0].textContent;
    var price  = +priceStr.split('(')[0].trim();
    var nums = +priceStr.split('(')[1];
    if(type === 1){
        price = price + itemPrice.toFixed(2);
        nums++;
    }else{
        price = price - itemPrice.toFixed(2);
        nums--;
    }
    
    document.getElementsByTagName('tfoot').getElementsByTagName('td')[0].textContent = price + '('+nums+'件商品';
}
function bind() {
    
}
function second(second){
    var time = new Date(second);
    var day  = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var second = time.getSeconds();
    return {
        day: day,
        hour:hour,
        min:min,
        second:second
    }
}