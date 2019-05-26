import {Routes} from '@angular/router'
import { HospitalComponent } from '../../intermediate2/hospital/hospital.component';
import { MedicoComponent } from '../../intermediate2/medico/medico.component';
import { IncrementadorComponent } from '../../intermediate2/incrementador/incrementador.component';

export const ROUTES:Routes = [
    {path:'hospital',
    component:HospitalComponent},
    {
        path: 'medicos/:id',
        component: MedicoComponent
    },
    {
        path: '**',
        component: IncrementadorComponent
    },
]