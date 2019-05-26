import { IncrementadorComponent } from './incrementador.component';

describe('Icrementador component unit',()=>{

   let incrementadorComponent:IncrementadorComponent

   beforeEach(()=>{

       incrementadorComponent = new IncrementadorComponent()
   })

    it('The should not be greater than 100',()=>{
        incrementadorComponent.progreso = 50;
        incrementadorComponent.cambiarValor(5)
        expect(incrementadorComponent.progreso).not.toBe(50)
    })

})