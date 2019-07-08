import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseniosComponent } from './disenios.component';

describe('DiseniosComponent', () => {
  let component: DiseniosComponent;
  let fixture: ComponentFixture<DiseniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
