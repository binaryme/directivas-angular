import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidirectivaComponent } from './midirectiva.component';

describe('MidirectivaComponent', () => {
  let component: MidirectivaComponent;
  let fixture: ComponentFixture<MidirectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidirectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
