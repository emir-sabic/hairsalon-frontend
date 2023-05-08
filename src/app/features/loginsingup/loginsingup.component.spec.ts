import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsingupComponent } from './loginsingup.component';

describe('LoginsingupComponent', () => {
  let component: LoginsingupComponent;
  let fixture: ComponentFixture<LoginsingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsingupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
