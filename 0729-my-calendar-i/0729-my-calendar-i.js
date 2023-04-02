
var MyCalendar = function() {
  this.events = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (const event of this.events) {
    if ((start >= event[0] && start < event[1]) || (end > event[0] && end <= event[1]) || (start <= event[0] && end > event[0]) || (start < event[1] && end >= event[1])) {
      return false;
    }
  }
  this.events.push([start, end])
  this.events.sort((a, b) => a[0] - b[0]);
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */