class Stack {
  constructor() {
    this.size = 0;
    this._data = {};
  }

  /** Optionally allow multiple pushes, like an array: `s.push(1, 2, 3, 4,)`
   *
   * push(...args) {
   *   args.forEach(item => { this._data[++this.size] = item });
   * }
   */
  push(item) {
    this._data[++this.size] = item;
  }

  pop() {
    let item;
    
    // stack must have something before emptying, else size may become negative, since delete will fail silently (except in strict mode).
    if (this.size > 0) {
      item = this._data[this.size];
      delete this._data[this.size];
      this.size--;
      return item;
    }
    return 'Empty stack';
  }
}
