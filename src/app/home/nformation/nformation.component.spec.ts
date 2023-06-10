import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NformationComponent } from './nformation.component';

describe('NformationComponent', () => {
  let component: NformationComponent;
  let fixture: ComponentFixture<NformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
