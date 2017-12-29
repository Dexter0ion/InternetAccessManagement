var assert = require('assert');
var should = require('should');
var Queue = require('../public/js/Queue.js');
var MGraph = require('../public/js/MGraph.js');

describe('Graph AdjList test', function () {
    var M = new MGraph();
    M.insertNode("Home", "127.0.0.1");
    M.insertNode("School", "192.168.0.1");
    console.log(M.getNodesList());



    it('get Nodes Array', function () {
        //M.getNodesList().should.equal(true);
        //assert.equal( [ 'A', 'B', 'C', 'D' ], graph.getVertex());

    });

    it('SearchNodeName', function () {
        M.searchNodeName("Home").should.equal(M.searchNodeName("Home"));
    })


    it('SearchNodeID', function () {
        M.searchNodeID("Home").should.equal(0);
    })

    it('setConnect', function () {
        M.setConnect("Home","School",1).should.equal(0);
    })

});
