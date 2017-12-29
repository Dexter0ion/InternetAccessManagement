var assert = require('assert');
var Dictionary = require('../public/js/Dictionary.js');

describe('Dictionary test', function () {
    var d1 = new Dictionary();
    d1.set("Home", "127.0.0.1");
    d1.set("School", "192.168.0.1");

    var keysArr = new Array("Home", "School");

    it('SIZE == 2', function () {
        assert.equal(2, d1.size());
    });
    /*
    it('has(HOME)==true,get(HOME)=127.0.0.1', function () {
        assert.equal(true, d1.has("Home"));
        assert.equal('127.0.0.1', d1.get("Home"));
    });
    
    it('keys',function(){
        assert.equal([ 'Home','School' ], d1.keys());
    });
    
    it('values',function(){
        assert.equal([ '127.0.0.1', '192.168.0.1' ], d1.values());
    });

    it('items{}', function () {
        var items =
            {
                "Home": "127.0.0.1",
                "School": "192.168.0.1"
            };
        assert.equal(items, d1.getItems());
    })
    

    */
});