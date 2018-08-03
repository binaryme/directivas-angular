import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivaswitchComponent } from './ejdirectivaswitch.component';

describe('EjdirectivaswitchComponent', () => {
  let component: EjdirectivaswitchComponent;
  let fixture: ComponentFixture<EjdirectivaswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirectivaswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirectivaswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
