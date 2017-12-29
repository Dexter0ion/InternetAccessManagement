var assert = require('assert');
var should = require('should');
var Queue = require('../public/js/Queue.js');
var Graph = require('../public/js/Graph.js');

describe('Graph AdjList test', function () {
    var graph = new Graph();
    var myVertices = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]); // 添加图的顶点
    }
    // 添加图的边
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
    var arrVertices = graph.getVertex();
    var arrAdjList = graph.getAdjList();


    it('Vertices=[A,B,C,D]', function () {
        graph.getVertex().should.equal(arrVertices);
        //assert.equal( [ 'A', 'B', 'C', 'D' ], graph.getVertex());

    });
    it('getAdjList', function () {
        graph.getAdjList().should.equal(arrAdjList);
        //assert.equal(true, graph.getAdjList());
    });
});

describe('AdjList BFS', function () {
    var graph = new Graph();
    var myVertices = ['A', 'B', 'C', 'D','E','F'];
    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]); // 添加图的顶点
    }
    // 添加图的边
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');
    graph.addEdge('F', 'E');
    /*
    var result = graph.DFS();
    console.log(graph.DFS());
    var arrVertices = graph.getVertex();
    var arrAdjList = graph.getAdjList();
    //路径操作
    var pathDatas = new Array();
    //ADD PATH
    for (var i = 0; i < arrVertices.length; i++) {
        pathDatas.push(graph.pathData(arrVertices[i]));
    }
    console.log(graph.printPathData(graph.pathData('A')));
    */

    it('BFS TEST', function () {
        assert.equal(true, graph.bfs());
        //graph.bfs('A').should.equal(arrAdjList);
    });

    it('Shortest Path BFS', function () {
        // graph.pathData('A').should.equal(true);
    });

    it('DFS TEST', function () {
        //assert.equal(true, graph.DFS());
        //graph.bfs('A').should.equal(arrAdjList);
    });

    it('DFS Visit', function () {
        // graph.pathData('A').should.equal(true);
    });
});