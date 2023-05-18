import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormTwoComponent } from './child-form-two.component';

describe('ChildFormTwoComponent', () => {
  let component: ChildFormTwoComponent;
  let fixture: ComponentFixture<ChildFormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildFormTwoComponent]
    });
    fixture = TestBed.createComponent(ChildFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
