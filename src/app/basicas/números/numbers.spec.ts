import { increase } from './numbers';
describe ('Numbers test',()=>{
   it('Should return 100 if the number is 100 or higher',()=>{
       const response = increase(300);
       expect(response).toBe(100)
   })
    it('Should return the number + 1 if the number is not higher or equal to 100', () => {
        const response = increase(67);
        expect(response).toBe(68)
    })
})