import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentModule } from '../shared/components/material-component.module';
import { CallbackModule } from './pipes/callback.module';

const sharedModules = [
  MaterialComponentModule,
  FormsModule,
  ReactiveFormsModule,
  CallbackModule,
];

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule {}
