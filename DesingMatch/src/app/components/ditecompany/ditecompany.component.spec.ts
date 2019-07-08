import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitecompanyComponent } from './ditecompany.component';

describe('DitecompanyComponent', () => {
  let component: DitecompanyComponent;
  let fixture: ComponentFixture<DitecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
