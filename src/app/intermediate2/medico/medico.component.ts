import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos:any = []

  constructor(public _medicoService:MedicoService) { }

  ngOnInit() {
  }

  sayHi(name:string){
    return `Hi ${name}, how is going?`
  }

  getMedicos(){
      this._medicoService.getMedicos().subscribe((medicos:any[])=> this.medicos=medicos)
  }

}
