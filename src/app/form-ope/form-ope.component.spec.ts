import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOpeComponent } from './form-ope.component';

describe('FormOpeComponent', () => {
  let component: FormOpeComponent;
  let fixture: ComponentFixture<FormOpeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOpeComponent]
    });
    fixture = TestBed.createComponent(FormOpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
