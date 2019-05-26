import { Player2 } from './player2';

describe('About player2',()=>{

  let player:Player2

  beforeEach(()=>{
      player = new Player2() 
  })

  it('Should emit an event when the player is wounded',()=>{
       let newHp:number = 0
      player.hpChange.subscribe((hp:number)=>{
           newHp = hp;
      })
      player.wound(120)
      expect(newHp).toBe(0)
  })

    it('Should emit an event when the player is wounded and survive if is less than 100', () => {
        let newHp: number = 0
        player.hpChange.subscribe((hp: number) => {
            newHp = hp;
        })
        player.wound(50)
        expect(newHp).toBe(50)
    })

})
