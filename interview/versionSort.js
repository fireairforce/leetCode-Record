const solve = (versions) => {
  return versions.sort((a,b) => {
    let item1 = a.split('.')
    let item2 = b.split('.')
    let len1 = item1.length;
    let len2 = item2.length;
    if (len1 === len2) {
      for (let i = 0;i<len1;i++) {
        let a1 = parseInt(item1[i])
        let b1 = parseInt(item2[i])
        if (a1 < b1) {
          return -1;
        } else if (a1 > b1) {
          return 1;
        }
      }
    } else if (len1 < len2) {
      
    }
  })
}