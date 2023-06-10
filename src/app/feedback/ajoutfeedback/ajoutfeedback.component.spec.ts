import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfeedbackComponent } from './ajoutfeedback.component';

describe('AjoutfeedbackComponent', () => {
  let component: AjoutfeedbackComponent;
  let fixture: ComponentFixture<AjoutfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
