import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsadminComponent } from './detailsadmin.component';

describe('DetailsadminComponent', () => {
  let component: DetailsadminComponent;
  let fixture: ComponentFixture<DetailsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
