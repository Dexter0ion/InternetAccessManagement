/*https://segmentfault.com/a/1190000008552141*/
/*
    字典
    键值对[key,value]
*/

function Dictionary() {
    //items为私有变量 字典载体
    var items = new Array();
    //has方法 键值存在字典 返回true 不存在范围false
    this.has = function (key) {
        return key in items;
    };

    //set方法 添加新元素
    this.set = function (key, value) {
        items[key] = value;
    }

    //remove方法 通过键值从字典删除对应的value
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.getItems = function(){
        return items;
    }
    //get方法 通过键值读取value
    this.get = function(key){
        /*
            return this.has(key)?items[key]:undefiened;
        */
        if(this.has(key))
            return items[key];
        else 
            return {};
    }

    //clear方法 清空元素
    this.clear = function(){
        //清空字典列表
        items = {};
    }

    //size方法 范围包含元素的数量
    this.size = function(){
        //Object.keys不会遍历原型链上的属性***
        return Object.keys(items).length;
    }

    //keys方法 将字典包含键名以数组形式返回
    this.keys = function(){
        var keys = new Array();
        for(var k in items){
            keys.push(k);
        }
        return keys;
        /*
        fail?
        return Object.keys[items];
        */
    }

    //values方法 将字典包含数值以数组形式返回
    this.values = function(){
        var values = new Array();
        for(var k in items){
            //has方法判断 避免遍历原型链上属性
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };

}

module.exports =  Dictionary;