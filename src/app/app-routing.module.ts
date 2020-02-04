import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SizeComponent } from './size/size.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path: '', component: WelcomepageComponent },
   {path:"home", component:WelcomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 