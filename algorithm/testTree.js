var BST = require('./tree.js').bst;
var nums = new BST();
var numbers = [23,45,16,37,3,99,22];
numbers.forEach(item =>{
    nums.insert(item);
});
nums.inOrder(nums.root);
console.log('min', nums.getMin());
console.log('max', nums.getMax());
let value = 33;
let found = nums.find(value);
if(found){
    console.log(`${value} is in the BST`);
}else{
    console.log(`${value} is not in the BST`);
}

