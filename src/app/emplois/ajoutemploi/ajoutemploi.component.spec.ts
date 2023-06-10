import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutemploiComponent } from './ajoutemploi.component';

describe('AjoutemploiComponent', () => {
  let component: AjoutemploiComponent;
  let fixture: ComponentFixture<AjoutemploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutemploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
