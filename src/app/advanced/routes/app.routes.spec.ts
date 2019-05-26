import { ROUTES } from './app.routes';
import { MedicoComponent } from '../../intermediate2/medico/medico.component';
describe('Main routes',()=>{
    it('Should exist the route medicos/:id',()=>{
        expect(ROUTES).toContain({
            path:'medicos/:id',
            component:MedicoComponent
        })
    })
})