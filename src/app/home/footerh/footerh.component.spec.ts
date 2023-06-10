import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhComponent } from './footerh.component';

describe('FooterhComponent', () => {
  let component: FooterhComponent;
  let fixture: ComponentFixture<FooterhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
