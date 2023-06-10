import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdepotComponent } from './ajoutdepot.component';

describe('AjoutdepotComponent', () => {
  let component: AjoutdepotComponent;
  let fixture: ComponentFixture<AjoutdepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutdepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
