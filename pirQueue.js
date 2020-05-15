class PriQueue {
  constructor(arr) {
    this.dataArr = []

    arr.forEach((item) => {
      this.dataArr.push(item)
    })
  }

  pushData(data) {
    if (this.dataArr.length === 0) {
      data.enable = false
      this.dataArr.push(data)
      return
    }

    data.enable = false
    this.dataArr.push(data)

    let curIndex = this.dataArr.length - 1
    let fatherIndex =
      (curIndex - 1) % 2 === 0 ? (curIndex - 1) / 2 : (curIndex - 2) / 2

    while (fatherIndex > -1) {
      if (this.dataArr[curIndex].val < this.dataArr[fatherIndex].val) {
        let temp = this.dataArr[fatherIndex]

        this.dataArr[fatherIndex] = this.dataArr[curIndex]
        this.dataArr[curIndex] = temp

        curIndex = fatherIndex
        let fatherIndex =
          (curIndex - 1) % 2 === 0 ? (curIndex - 1) / 2 : (curIndex - 2) / 2
      } else {
        break
      }
    }
  }

  deleteHead() {
    let head = this.dataArr.shift()

    if (this.dataArr.length === 0) {
      return head
    }
    this.dataArr.unshift(this.dataArr.pop())
    let curIndex = 0
    let child1Index = 1
    let child2Index = 2
    while (
      this.dataArr[child1Index] !== undefined ||
      this.dataArr[child2Index] !== undefined
    ) {
      let child1Val =
        this.dataArr[child1Index] === undefined
          ? Infinity
          : this.dataArr[child1Index].val
      let child2Val =
        this.dataArr[child2Index] === undefined
          ? Infinity
          : this.dataArr[child1Index].val

      if (child1Val < child2Val) {
        if (this.dataArr[child1Index].val < this.dataArr[curIndex].val) {
          let temp = this.dataArr[child1Index]

          this.dataArr[child1Index] = this.dataArr[curIndex]
          this.dataArr[curIndex] = temp

          curIndex = child1Index
          child1Index = curIndex * 2 + 1
          child2Index = curIndex * 2 + 1
        } else {
          break
        }
      } else {
        if (this.dataArr[child2Index].val < this.dataArr[curIndex].val) {
          let temp = this.dataArr[child2Index]

          this.dataArr[child2Index] = this.dataArr[curIndex]
          this.dataArr[curIndex] = temp

          curIndex = child2Index
          child1Index = curIndex * 2 + 1
          child2Index = curIndex * 2 + 1
        } else {
          break
        }
      }
    }
    return head
  }

  getSize() {
    return this.dataArr.length
  }
}
