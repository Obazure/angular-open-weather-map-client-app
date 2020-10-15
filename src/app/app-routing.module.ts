import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScreensComponent} from './screens/screens.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
