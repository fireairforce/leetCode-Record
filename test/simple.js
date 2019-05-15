const { add,mul } = require('../test');
const { should,expect,assert } = require('chai');
 
describe('#test',()=>{
    describe('add',()=>{
        it('should return 5 when 2+3',()=>{
            expect(add(2,3),5)
        });

        it('should return 5 when 2+3',()=>{
            expect(add(2,3),5)
        });
    });
    describe('mul',()=>{
        it('should return -6 when 2*-3',()=>{
            expect(mul(2,-3),-6)
        })
    })
})