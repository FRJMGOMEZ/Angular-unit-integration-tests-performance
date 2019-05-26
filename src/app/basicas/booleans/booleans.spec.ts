import { userLogged } from './booleans';


describe('Booleans tests',()=>{
    it('Should return true',()=>{
        const res = userLogged();
        expect(res).toBeTruthy()
        expect(res).not.toBeFalsy()
    })
})