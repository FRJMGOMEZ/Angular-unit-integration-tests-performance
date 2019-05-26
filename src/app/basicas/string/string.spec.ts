import { hi } from './string';

describe('Strings test',()=>{
    it('Should return an string',()=>{
    const response = hi('Pancho');
            expect(typeof response).toBe('string')
    })

    it('Should return hi with the name of the user', () => {
        const name = 'Pancho';
        const response = hi('Pancho');
        expect(response).toContain(name)
    })
}); 

