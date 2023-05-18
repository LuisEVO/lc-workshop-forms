import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ArrayValue, ChildFormTwo } from '../parent-form.component';

@Component({
  selector: 'app-child-form-two',
  templateUrl: './child-form-two.component.html',
  styleUrls: ['./child-form-two.component.css']
})
export class ChildFormTwoComponent implements OnInit, OnChanges {
  @Input() form!: ChildFormTwo
  @Input() initialValues?: ArrayValue[]
  @Input() canUse!: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.initialValues);
    // this.loadInitialValues()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);

    if (!!changes['initialValues'].currentValue) {
      this.loadInitialValues()
    }
  }

  loadInitialValues() {
    this.form.controls.array.clear();
    this.initialValues?.forEach(value => this.addArrayGroup(value))
  }

  addArrayGroup(value?: ArrayValue) {
    if (!this.canUse) return;
    const group = this.getArrayGroup(value)
    this.form.controls.array.push(group)
  }

  getArrayGroup(value?: ArrayValue) {
    return this.fb.group(value || { text: '' })
  }



}
