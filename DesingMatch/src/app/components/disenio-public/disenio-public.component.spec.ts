import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenioPublicComponent } from './disenio-public.component';

describe('DisenioPublicComponent', () => {
  let component: DisenioPublicComponent;
  let fixture: ComponentFixture<DisenioPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenioPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenioPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
