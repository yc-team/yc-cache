'use strict';


module.exports = Cache;

function Cache(limit) {
    this.keys = [];
    this.limit = limit;
    this.store = {};
}

//add 
Cache.prototype.add = function(key){
    //push return new total length of this.keys
    var len = this.keys.push(key);

    if (len > this.limit) {
        //this.keys.shift() return the first
        var first = this.keys.shift();
        this.remove(first);
    }

    var result = this.store[key] = [];
    //why createAt
    //and this.store[key] will also has createAt
    result.createAt = new Date();

    return result;

};


//remove
Cache.prototype.remove = function(key){
    delete this.store[key];
};


//get
Cache.prototype.get = function(key){
    return this.store[key];
};

