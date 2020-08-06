class SortedList{
  constructor(){
    this.items = [];
    this.length = 0;
  }

  add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort(function(a,b){
        return (a-b);
      })
    }

  get(pos) {
    if(pos <= this.length){
      return this.items[pos];
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length> 0){
      return this.items[this.length-1]
    }else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.length> 0){
      return this.items[0]
    }else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let result = 0;
    for(let i = 0;i <this.items.length; i++){
      let item = this.items[i];
      result = result + item;
    }
    return result;
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }else{
      let somme = this.sum();
      let result;
      result = somme / this.items.length;
      return result;
    }
  }
}

module.exports = SortedList;
