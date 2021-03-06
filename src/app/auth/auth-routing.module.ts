import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import { SignoutComponent } from '../auth/signout/signout.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent },
  { path: 'signout', component: SignoutComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
