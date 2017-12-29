//邻接矩阵类

function GraphNode() {
    //attribute
    var NodeName;
    var IpAddress;

    //function
    this.setNode = function (name, ip) {
        NodeName = name;
        IpAddress = ip;
    }
    this.getNode = function () {
        return {
            NodeName,
            IpAddress
        }
    }
    this.getName = function () {
        return NodeName;
    }
};

function GraphEdge() {
    //attribute
    var N1 = new GraphNode();
    var N2 = new GraphNode();
    var weight;
    var isConnect;
    //function
    this.setEdge = function (n1, n2, weight) {
        N1 = n1;
        N2 = n2;
        weight = weight;
        isConnect = true;
    }


};
function MGraph() {
    var Nodes = new Array();
    var M = new Array();          //Matrix二维数组  
    this.initMatrix = function () {

    };

    this.insertNode = function (name, ip) {
        var node = new GraphNode();
        node.setNode(name, ip);
        //console.log(node.getNode());
        Nodes.push(node.getNode());

    }

    //find

    this.searchNodeName = function (name) {
        //用ES语法重构
        for (var i = 0; i < Nodes.length; i++) {
            if (Nodes[i].NodeName == name)
                return Nodes[i];
        }

       return undefined;
    }

    this.searchNodeID = function (name) {
        //用ES语法重构
        for (var i = 0; i < Nodes.length; i++) {
            if (Nodes[i].NodeName == name)
                return i;
        }
    }
    this.setConnect = function (name1, name2) {
        var node1 = this.searchNodeName(name1);
        var node2 = this.searchNodeName(name2);

        if (node1 && node2) {
            var Link = new GraphEdge();
            Link.setEdge(node1, node2, 1);
            var node1ID = this.searchNodeID(name1);
            var node2ID = this.searchNodeID(name2);

            if (node1ID != -1 && node2ID != -1) {
                M[node1ID][node2ID] = Link;
                M[node2ID][node1ID] = Link;
            }
        }

        return true;
    }
    this.displayNodeList = function () {
        for (var i = 0; i < Nodes.length; i++) {
            console.log(Nodes[i]);
        }
    }

    this.getNodesList = function () {
        return Nodes;
    }
};

module.exports = MGraph;