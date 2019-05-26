import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringComponent } from './basicas/string/string.component';
import { MedicosComponent } from './intermediate/spyes/medicos.component';
import { MedicosService } from './intermediate/spyes/medicos.service';
import { MedicoComponent } from './intermediate2/medico/medico.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './advanced/routes/app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    StringComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
