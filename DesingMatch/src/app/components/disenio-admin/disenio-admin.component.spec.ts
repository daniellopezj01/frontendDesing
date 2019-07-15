import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenioAdminComponent } from './disenio-admin.component';

describe('DisenioAdminComponent', () => {
  let component: DisenioAdminComponent;
  let fixture: ComponentFixture<DisenioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
