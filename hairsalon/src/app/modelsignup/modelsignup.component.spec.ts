import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsignupComponent } from './modelsignup.component';

describe('ModelsignupComponent', () => {
  let component: ModelsignupComponent;
  let fixture: ComponentFixture<ModelsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
