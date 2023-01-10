/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.window = new Array(size).fill(0);
    this.size = size;
    this.n = 0;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.sum -= this.window[this.n % this.size];
    this.sum += val;
    this.window[this.n % this.size] = val;
    this.n++;
    return this.sum / (Math.min(this.size, this.n));

};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */