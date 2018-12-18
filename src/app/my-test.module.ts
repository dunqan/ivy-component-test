import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyTestComponent } from './my-test.component';
import { DrugiComponent } from './drugi/drugi.component';
import { TrzeciComponent } from './trzeci/trzeci.component';

@NgModule({
  declarations: [
    MyTestComponent,
    DrugiComponent,
    TrzeciComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [MyTestComponent, TrzeciComponent],
  providers: [],
  bootstrap: [MyTestComponent]
})
export class MyTestModule { }
