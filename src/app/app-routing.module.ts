import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'display',component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
