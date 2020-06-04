data.forEach((item) => {
  if (item.id === tempData.firstCategoryId) {
    this.industryName = item.name
    this.banEntryFlag = item.banEntry
    this.needCertification = item.needCertification
    item.children.forEach((obj) => {
      if (obj.id === tempData.secondCategoryId) {
        this.industryName += '/' + obj.name
        this.needCertification = obj.needCertification
      }
    })
  }
})


data.filter(item => item.id === tempData.firstCategoryId).forEach(item => {
  this.industryName = item.name
  this.banEntryFlag = item.banEntry
  this.needCertification = item.needCertification
  item.children.filter(obj => obj.id === tempData.secondCategoryId).forEach(obj => {
    this.industryName += '/' + obj.name
    this.needCertification = obj.needCertification
  })
})