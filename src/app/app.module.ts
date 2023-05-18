import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormComponent } from './parent-form/child-form/child-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildFormTwoComponent } from './parent-form/child-form-two/child-form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent,
    ChildFormTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
