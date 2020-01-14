const Table = require('cli-table')


 
const table = new Table({
    colAligns: ['left', 'right', 'right', 'right'],
    chars: {
        top: '',
        'top-mid': '',
        'top-left': '',
        'top-right': '',
        bottom: '',
        'bottom-mid': '',
        'bottom-left': '',
        'bottom-right': '',
        left: '',
        'left-mid': '',
        mid: '',
        'mid-mid': '',
        right: '',
        'right-mid': '',
        middle: ''
    }
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['commander', '^4.0.1', '→', '^4.6.8']
  , ['commander', '^4.0.1', '→', '^4.6.8']
);
 
console.log(table.toString());