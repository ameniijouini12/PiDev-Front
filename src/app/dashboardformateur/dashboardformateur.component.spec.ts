import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardformateurComponent } from './dashboardformateur.component';

describe('DashboardformateurComponent', () => {
  let component: DashboardformateurComponent;
  let fixture: ComponentFixture<DashboardformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
