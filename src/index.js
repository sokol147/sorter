class Sorter {
  constructor() {
    this._elems = [];
    this._compareFunction = function(a,b){
      return a - b;
    }
  }

  add(element) {
    this._elems.push(element);
  }

  at(index) {
    return this._elems[index];
  }

  get length() {
    return this._elems.length;
  }

  toArray() {
    return this._elems;
  }

  sort(indices) {
    // your implementation
    const sortPart = [];

    indices.sort();

    for(let i = 0, len = indices.length; i < len; i++){
      sortPart.push(this._elems[indices[i]]);
    }

    sortPart.sort(this._compareFunction);

    for(let i = 0, len = indices.length; i < len; i++){
      this._elems[indices[i]] = sortPart[i];
    }
  }

  setComparator(compareFunction) {
    this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;