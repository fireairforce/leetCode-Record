class Heap {
  constructor(list, compare = (a, b) => a - b) {
    this.left = index => 2 * index + 1
    this.right = index => 2 * index + 2
    this.parent = index => Math.floor((index - 1) / 2)
    this.heapify = (index = 0) => {
      const { list } = this
      const leftIndex = this.left(index)
      const rightIndex = this.right(index)
      let maxIndex = index
      if (list[leftIndex] !== undefined
        && this.compare(list[maxIndex], list[leftIndex]) > 0) {
        maxIndex = leftIndex
      }
      if (list[rightIndex] !== undefined
        && this.compare(list[maxIndex], list[rightIndex]) > 0) {
        maxIndex = rightIndex
      }
      if (index !== maxIndex) {
        const temp = list[index]
        list[index] = list[maxIndex]
        list[maxIndex] = temp
        this.heapify(maxIndex)
      }
    }
    this.buildHeap = () => {
      for (let i = Math.floor(this.list.length / 2); i >= 0; i--) {
        this.heapify(i)
      }
      return this.list
    }
    this.extract = () => {
      const temp = this.list[0]
      this.list[0] = this.list[this.list.length - 1]
      this.list[this.list.length - 1] = temp
      const result = this.list.pop()
      this.heapify(0)
      return result
    }
    this.insert = (item) => {
      const { list } = this
      list.push(item)
      let index = list.length - 1
      let parentIndex = this.parent(index)
      while (list[parentIndex] !== undefined && this.compare(list[parentIndex], list[index]) > 0) {
        const temp = list[index]
        list[index] = list[parentIndex]
        list[parentIndex] = temp
        index = parentIndex
        parentIndex = this.parent(index)
      }
    }
    this.list = list
    this.compare = compare
    this.buildHeap()
  }
}
