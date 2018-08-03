import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangforobjectComponent } from './ejdirectivangforobject.component';

describe('EjdirectivangforobjectComponent', () => {
  let component: EjdirectivangforobjectComponent;
  let fixture: ComponentFixture<EjdirectivangforobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirectivangforobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirectivangforobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
