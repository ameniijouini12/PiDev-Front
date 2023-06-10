import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemploiComponent } from './listemploi.component';

describe('ListemploiComponent', () => {
  let component: ListemploiComponent;
  let fixture: ComponentFixture<ListemploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
