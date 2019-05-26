import { getRobots } from './arrays';
describe('Arrays test',()=>{
   it('Should return at list three items',()=>{
         const res = getRobots();
         expect(res.length).toBeGreaterThanOrEqual(3)
   })
    it('Should include Megaman and Ultron', () => {
        const res = getRobots();
        expect(res).toContain('Megaman')
        expect(res).toContain('Ultron')
    })
})