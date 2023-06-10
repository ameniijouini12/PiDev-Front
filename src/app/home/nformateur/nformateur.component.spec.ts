import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NformateurComponent } from './nformateur.component';

describe('NformateurComponent', () => {
  let component: NformateurComponent;
  let fixture: ComponentFixture<NformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
