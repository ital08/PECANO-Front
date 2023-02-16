import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponentComponent } from './base-component.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseComponentRoutingModule {}
