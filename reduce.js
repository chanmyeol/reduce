
Array.prototype.iReduce = function(fn,pre){
    for(let i = 0 ; i < this.length; i++){ 
        if(!pre){ 
            pre = fn(this[i],this[i+1],i+1,this);
            i++;
        }else{ 
            pre = fn(prev,this[i],i,this);
        }
    }
    return pre;
}