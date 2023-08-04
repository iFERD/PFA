import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTLComponent } from './form-tl.component';

describe('FormTLComponent', () => {
  let component: FormTLComponent;
  let fixture: ComponentFixture<FormTLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTLComponent]
    });
    fixture = TestBed.createComponent(FormTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
