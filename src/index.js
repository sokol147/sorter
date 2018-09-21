class Sorter {
  constructor() {
    // your implementation
    this._elems = [];
    this._compareFunction = function(a,b){
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this._elems.push(element);
  }

  at(index) {
    // your implementation
    return this._elems[index];
  }

  get length() {
    // your implementation
    return this._elems.length;
  }

  toArray() {
    // your implementation
    return this._elems;
  }

  sort(indices) {
    // your implementation
    let sortPart = [];

    indices.sort();

    for(let i = 0; i < indices.length; i++){
      sortPart.push(this._elems[indices[i]]);
    }

    sortPart.sort(this._compareFunction);

    for(let i = 0; i < indices.length; i++){
      this._elems[indices[i]] = sortPart[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;