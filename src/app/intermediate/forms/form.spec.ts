import { LogginForm } from './forms';
import { FormBuilder } from '@angular/forms';

describe('Forms tests',()=>{

    let component: LogginForm

    beforeEach(()=>{
        component = new LogginForm(new FormBuilder())
    })

    it('The form should have three fields',()=>{
        expect(component.form.contains('email')).toBeTruthy()
        expect(component.form.contains('name')).toBeTruthy()
        expect(component.form.contains('password')).toBeTruthy()
    })

    it('Email should be mandatory',()=>{
        let control = component.form.get('email')
        control.setValue('')
        expect(control.valid).toBeFalsy()
    })

    it('Email should be valid', () => {
        let control = component.form.get('email')
        control.setValue('frjmartinezgomez@gmail.com')
        expect(control.valid).toBeTruthy()
    })
})