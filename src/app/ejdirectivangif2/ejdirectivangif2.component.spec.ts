import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejdirectivangif2Component } from './ejdirectivangif2.component';

describe('Ejdirectivangif2Component', () => {
  let component: Ejdirectivangif2Component;
  let fixture: ComponentFixture<Ejdirectivangif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejdirectivangif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejdirectivangif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
