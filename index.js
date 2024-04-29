class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length ||pos < 0 ) {
      throw new Error('OutOfBounds'); 
    }
    return this.items[pos]; 
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');  
    }
    let big = this.items[0];  
    for (let i = 1; i < this.items.length; i++) {  
      if (this.items[i] > big) {
        big = this.items[i]; 
      }
    }
    return big;  
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList'); 
    }
    let minimum = this.items[0];
    for(let i = 1; i < this.items.length; i++){
      if(this.items[i] < minimum){
        minimum = this.items[i];
      }
    }
    return minimum;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
