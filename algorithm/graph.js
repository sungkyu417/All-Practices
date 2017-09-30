function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = {};
    for(let i=0;i<this.vertices;i++){
        this.adj[i] = [];
        // this.adj[i].push('');
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
}
function addEdge(v, m) {
    this.adj[v].push(m);
    this.adj[m].push(v);
    this.edges++;
}
function showGraph() {
    for(let i=0;i<this.vertices;i++){
        let str = `${i} ->`;
        for(let j=0;j<this.adj[i].length;j++){
            str += ' ' + this.adj[i][j];
        }
        console.log(str);
    }
}
function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v]){
        console.log('Visited vertex: '+v);
    }
    for(let i=0;i<this.adj[v].length;i++){
        if(!this.marked[this.adj[v][i]]){
            this.dfs(this.adj[v][i]);
        }
    }
}
function bfs(v){
    let queue = [];
    this.marked[v] = true;
    queue.push(v);
    while(queue.length>0){
        let e = queue.shift();
        if(this.adj[e]!=undefined){
            console.log('Visited vertex '+e);
        }
        for(let s in this.adj[e]){
            if(!this.marked[s]){
                this.marked[s] = true;
                queue.push(s);
            }
        }
    }
}
module.exports = {
    graph: Graph
}