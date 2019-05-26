import { MedicoComponent } from './medico.component';
import { TestBed,ComponentFixture } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Doc component',()=>{

    let component: MedicoComponent
    let fixture:ComponentFixture<MedicoComponent>

    beforeEach(()=>{

        TestBed.configureTestingModule({
            declarations:[MedicoComponent],
            providers:[MedicoService],
            imports:[HttpClientModule]
        })

       fixture = TestBed.createComponent(MedicoComponent);
       component = fixture.componentInstance;
        
    })

    it('The component should be created',()=>{
        expect(component).toBeTruthy()
    })
    it('Should return the name of the doctor',()=>{

        let name ='Juan';
        let res = component.sayHi(name)
        expect(res).toContain(name)
    })
})