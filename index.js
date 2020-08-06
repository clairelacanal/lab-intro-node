class SortedList{
  constructor(){
    this.items = [];
    this.length = 0;
  }

  add(item){
    this.length++;
    this.item.push(this.length);
    this.item.sort(function(a,b){
      return (a-b)
    })
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
