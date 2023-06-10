import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemploiComponent } from './updateemploi.component';

describe('UpdateemploiComponent', () => {
  let component: UpdateemploiComponent;
  let fixture: ComponentFixture<UpdateemploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
