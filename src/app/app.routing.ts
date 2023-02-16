import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  // Redirect empty path to '/home'
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  // Auth routes for guests
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/base-component/base-component.module').then(
            (m) => m.BaseComponentModule
          ),
      },
    ],
  },
];

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
