import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CallbackPipe } from './callback.pipe';

@NgModule({
  declarations: [CallbackPipe],
  imports: [CommonModule],
  exports: [CallbackPipe],
})
export class CallbackModule {}
