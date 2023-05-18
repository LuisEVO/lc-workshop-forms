import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, of } from 'rxjs';

export type ArrayValue = {
  text: string;
}

export interface ChildFormTwo extends FormGroup<{
  array: FormArray<FormGroup<{
    text: FormControl
  }>>
}> {}

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent {
  form: FormGroup<{
    name: FormControl,
    documentType: FormControl,
    date: FormControl,
    childForm: FormGroup<{
      age: FormControl
    }>
    childFormTwo: ChildFormTwo
  }> = this.fb.group({
    name: '',
    documentType: '',
    date: ['', Validators.required],
    childForm: this.fb.group({
      age: ''
    }),
    childFormTwo: this.fb.group({
      array: this.fb.array([
        this.fb.group({ text: '' })
      ])
    })
  })

  options = [
    {
      id: 1,
      text: 'Dni',
      tab1: true,
      tab2: false
    },
    {
      id: 2,
      text: 'Pasaporte',
      tab1: false,
      tab2: false
    }
  ]

  initialArrayValues: ArrayValue[] = []

  get isDateValid() {
    return this.form.controls.date.valid;
  }

  constructor(private fb: FormBuilder) {
    // actualizar
    this.form.controls.documentType.patchValue(this.options[0])

    of([{ text: 'Item 1' }, { text: 'Item 2' }])
    .pipe(delay(1000))
    .subscribe(values => {
      this.initialArrayValues = values
      // this.form.controls.childFormTwo.controls.array.clear();
      // values.forEach(value => {
      //   this.form.controls.childFormTwo.controls.array.push(this.fb.group({ text: value.text }))
      // })

      // this.form.controls.childFormTwo.controls.array.patchValue(values)
    })
  }


}
