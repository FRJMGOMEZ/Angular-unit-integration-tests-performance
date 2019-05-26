import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref} from '@angular/router';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports:[
         RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));
  
  it('Should have a router-outlet',()=>{
     
    let router_outlet = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(router_outlet).toBeTruthy()
    expect(router_outlet).not.toBeNull()
    
  })

  it('Should have a link to medicos',async () => {
    

  const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  let exist:boolean=false;

 await links.forEach((link)=>{
  
  console.log(link.nativeElement)
    if (link.attributes['routerLink'] === "['/medicos']") {
      exist = true;
      return
    } 
  })
  expect(exist).toBeTruthy()
  })
});
