/*
https://segmentfault.com/a/1190000011216330
*/

var Dictionary = require('./Dictionary.js');
var Queue = require('./Queue.js');

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    /*
        -white:顶点未被访问
        -grey：顶点被访问，但未被探索
        -black：被访问且被完全探索
    */
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []); //键值对应数组
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.getVertex = function () {
        return vertices;
    }

    this.getAdjList = function () {
        return adjList.getItems();
    }

    this.bfs = function (v, callback) {
        var color = initializeColor();      //所有顶点初始化
        var queue = new Queue();            //队列实例化
        queue.enqueue(v);                   //起始顶点v入队
        while (!queue.isEmpty()) {
            var u = queue.dequeue();        //获取顶点元素
            var neighbors = new Array();
            neighbors = adjList.get(u); //获取相邻顶点
            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] == 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }

                color[u] = 'black';
                callback && callback(u);      //用回调函数处理该节点
            }
        }
        return true;
    }

    // 获取路径信息
    this.pathData = function (v) {
        var color = initializeColor(),
            queue = new Queue(),

            d = new Array(vertices.length).fill(0), // 用于保存起始顶点v到任意顶点u的距离
            pred = new Array(vertices.length).fill(null); // 用于保存v到u的路径上u的上一级顶点（前溯点）

        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';

                    d[w] = d[u] + 1; // w到u的距离差是1
                    pred[w] = u; // w的上一级顶点是u

                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return { // 返回保存的数据
            distances: d,
            predecessors: pred
        };
    };
    // 格式化输出路径信息
    this.printPathData = function (pathData) {
        var fromVertex = vertices[0]; // 获取起始点
        for (var i = 1; i < vertices.length; i++) {
            var toVertex = vertices[i], // 要到达的顶点
                path = []; // 用于保存路径
            // 从目标顶点一直回溯到起始顶点
            for (var v = toVertex; v !== fromVertex; v = pathData.predecessors[v]) {
                path.push(v); // 顶点添加进路径
            }
            path.push(fromVertex); // 将起始顶点添加进路径
            var s = path.pop();
            while (path.length > 0) {
                s += ' - ' + path.pop(); // 从路径数组倒序输出顶点
            }
            console.log(s);
        }
    }

    this.DFS = function () {
        var color = initializeColor(), //{2}
            len = vertices.length,

            d = new Array(len).fill([]), // 用于保存任意顶点u的发现时间
            f = new Array(len).fill([]), // 用于保存任意顶点u探索完成的时
            time = 0; // 用于记录探索时间

        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f);
            }
        }

        return { // 返回探索数据
            discovery: d,
            finished: f
        };
        function DFSVisit(u, color, d, f) {
            console.log('discovered ' + u);
            color[u] = 'grey';

            d[u] = ++time; // 发现顶点u后，时间+1

            var neighbors = adjList.get(u);
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    DFSVisit(w, color, d, f);
                }
            }
            color[u] = 'black';

            f[u] = ++time; // 探索完顶点u后，时间+1

            console.log('explored ' + u);
        };
    };
}

module.exports = Graph;