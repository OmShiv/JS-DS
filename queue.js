class Queue {
  constructor() {
    this._start = 0;
    this._end = 0;
    this._data = {};
  }

  get size() {
    return this._end - this._start;
  }

  // Add multiple items or single `q.enqueue(1,2,3,4,5)`
  enqueue(...args) {
    args.forEach(item => { this._data[this._end++] = item });
  }

  dequeue() {
    let item;
    
    // check if the queue has some data, else indices will be screwed when dequeing an empty queue. 
    if (this._start < this._end) {
      item = this._data[this._start];
      delete this._data[this._start];
      this._start++;
      return item;
    }
    return 'Empty queue';
    // optionally, can reset the _start and _end to 0 for console logging convenience. Not needed for Queue operation.
  }
}
