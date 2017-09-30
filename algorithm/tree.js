function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMax = getMax;
    this.getMin = getMin;
    this.find = find;
}
module.exports = {
    bst:BST
};
function insert(data) {
    let n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    }else{
        let current = this.root;
        let parent;
        while(true){
            parent = current;
            if(data<current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }

}
function inOrder(node){
    if(node){
        inOrder(node.left);
        console.log(node.show()+ ' ');
        inOrder(node.right);
    }
}
function preOrder(node){
    if(node){
        console.log(node.show()+ ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node){
    if(node){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show()+ ' ');
    }
}
function getMin(){
    let current = this.root;
    while(current.left){
        current = current.left;
    }
    return current.data;
}
function getMax() {
    let current = this.root;
    while(current.right){
        current = current.right;
    }
    return current.data;
}
function find(data) {
    let current = this.root;
    while(current){
        if(data<current.data){
            current = current.left;
        }else if(data>current.data){
            current = current.right;
        }else{
            return current;
        }
    }
    return null;
}
function remove(data) {

}
function removeNode(node, data) {

}


