import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendformateurComponent } from './agendformateur.component';

describe('AgendformateurComponent', () => {
  let component: AgendformateurComponent;
  let fixture: ComponentFixture<AgendformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
