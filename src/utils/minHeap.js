class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (new Date(this.heap[index].expiryDate) >= new Date(this.heap[parent].expiryDate)) break;
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      index = parent;
    }
  }

  getSoonExpiring(n = 3) {
    return this.heap.slice(0, n);
  }

  rebuild(items) {
    this.heap = [];
    items.forEach(item => this.insert(item));
  }
}

export default MinHeap;
