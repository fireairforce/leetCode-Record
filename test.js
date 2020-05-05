const test = [{ a: 'test' }, { a: 'test1' }]

const test2 = [
  { type: 'symbol', text: 'IFamily', sourceFile: 'test/test.ts' },
  { type: 'punctuation', text: '[' },
  { type: 'punctuation', text: ']' },
]
// res = test.reduce((a1,a2)=> a1.a + a2.a)
res = test2.reduce((a1, a2) => {
  console.log(a1, a2)
  return a1.text + a2.text
})
console.log(res)
