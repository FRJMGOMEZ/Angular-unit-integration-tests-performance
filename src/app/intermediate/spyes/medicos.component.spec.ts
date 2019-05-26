import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    const service = new MedicosService(null);

    beforeEach( () => {
     componente = new MedicosComponent(service)
    });


    it('Init should upload doctors', () => {
    let doctors = ['Mateo Guitierrez','Rodolfo Suarez','María Martínez','Susana Heredia']
     spyOn(service,'getMedicos').and.callFake(()=>{
       return from([doctors])
     })
     componente.ngOnInit()
     expect(componente.medicos.length).toBeGreaterThan(0)
    });

    it('Should call the server to add a doctor',()=>{
     const spy = spyOn(service,'agregarMedico').and.callFake((medico)=>{
          return empty()
      })
      componente.agregarMedico()
      expect(spy).toHaveBeenCalled()
    })

    it('Should add a new doctor to the array of doctors',()=>{
      const medico = {name:'Josue',email:'josue@gmail.com',password:'123'}
      spyOn(service,'agregarMedico').and.returnValue(from([medico]))
      componente.agregarMedico()
      expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
    })

    it("If agregarDoctor fail should return 'fallo en el servicio'",()=>{
      const myError = 'The doctor could not be aggregated';
      spyOn(service,'agregarMedico').and.returnValue(throwError(myError))
      componente.agregarMedico()
      expect(componente.mensajeError).toBe(myError)
    })

    it('It has been call the server to delete a doctor',()=>{

      spyOn(window,'confirm').and.returnValue(true)

      let spy = spyOn(service,'borrarMedico').and.returnValue(empty)
      componente.borrarMedico('1')
      expect(spy).toHaveBeenCalledWith('1')
    })

  it('It has not been call the server to delete a doctor', () => {

    spyOn(window, 'confirm').and.returnValue(false)

    let spy = spyOn(service, 'borrarMedico').and.returnValue(empty)
    componente.borrarMedico('1')
    expect(spy).not.toHaveBeenCalledWith('1')
  })
});

