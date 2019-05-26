import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incrementator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Should show the legend and the progress ', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges()
    const element:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(element.innerHTML).toContain(`Progreso de carga`)
  })

  it('Should show in the input the value of the progress',()=>{
    component.cambiarValor(5)
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      let input = fixture.debugElement.query(By.css('input'));
      let element = input.nativeElement
      expect(element.value).toBe('55')
    })
  })

  it('Should icrement/decrement 5 with a click of the button',()=>{
   const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))
   buttons[0].triggerEventHandler('click',null)
   expect(component.progreso).toBe(45)
    buttons[1].triggerEventHandler('click', null)
    expect(component.progreso).toBe(50)
  })

  it('The progress should change when click to a button',()=>{
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'))
    buttons[0].triggerEventHandler('click',null)
    fixture.detectChanges()
    let h3:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.innerHTML).toContain('45')
  })

});
