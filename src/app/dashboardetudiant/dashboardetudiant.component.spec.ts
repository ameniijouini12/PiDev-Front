import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardetudiantComponent } from './dashboardetudiant.component';

describe('DashboardetudiantComponent', () => {
  let component: DashboardetudiantComponent;
  let fixture: ComponentFixture<DashboardetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardetudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
