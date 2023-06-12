import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistComponent } from './stylist.component';

describe('StylistComponent', () => {
  let component: StylistComponent;
  let fixture: ComponentFixture<StylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
