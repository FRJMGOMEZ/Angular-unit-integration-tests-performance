import { Player } from "./classes";

describe('Classes tests',()=>{

    let player;
    beforeEach(() => {
        player = new Player()
    })


    it('If harm is 20 should return an hp of 80',()=>{
        const response = player.wound(20)
        expect(response).toBe(80)
    })
    it('If harm is 50 should return an hp of 50', () => {
   
        const response = player.wound(20)
        expect(response).toBe(80)
    })
    it('Should return 0 if warm is greater than 100', () => {
        const response = player.wound(120)
        expect(response).toBe(0)
    })

    
})