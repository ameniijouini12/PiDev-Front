import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepotComponent } from './listdepot.component';

describe('ListdepotComponent', () => {
  let component: ListdepotComponent;
  let fixture: ComponentFixture<ListdepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
