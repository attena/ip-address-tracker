import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from "@angular/common";
import { MainModule } from "./main/main.module";

import { Main } from "./main/main.component";

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    Main,
  ],
  exports: [
    Main,
  ]
})

export class ComponentsModule {};
