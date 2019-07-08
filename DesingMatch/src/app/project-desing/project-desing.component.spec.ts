import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDesingComponent } from './project-desing.component';

describe('ProjectDesingComponent', () => {
  let component: ProjectDesingComponent;
  let fixture: ComponentFixture<ProjectDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
