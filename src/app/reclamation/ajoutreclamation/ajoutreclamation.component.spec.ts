import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutreclamationComponent } from './ajoutreclamation.component';

describe('AjoutreclamationComponent', () => {
  let component: AjoutreclamationComponent;
  let fixture: ComponentFixture<AjoutreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
