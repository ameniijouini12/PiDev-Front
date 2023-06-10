import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationformateurComponent } from './formationformateur.component';

describe('FormationformateurComponent', () => {
  let component: FormationformateurComponent;
  let fixture: ComponentFixture<FormationformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
