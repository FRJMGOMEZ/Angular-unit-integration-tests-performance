import {FormGroup, FormBuilder, Validators} from '@angular/forms'

export class LogginForm {
    form:FormGroup
    constructor(fb:FormBuilder){
        this.form = fb.group({
            name:['',Validators.required],
            email:['',[Validators.email,Validators.required]],
            password:['',Validators.required]
        })
    }
}