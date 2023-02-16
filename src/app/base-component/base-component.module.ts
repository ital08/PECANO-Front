import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BaseComponentComponent } from './base-component.component';
import { BaseComponentRoutingModule } from './base-component.routing';

@NgModule({
  declarations: [BaseComponentComponent],
  imports: [CommonModule, BaseComponentRoutingModule, SharedModule],
})
export class BaseComponentModule {}
