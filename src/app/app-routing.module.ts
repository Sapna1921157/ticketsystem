import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "", redirectTo: "login",
    pathMatch: "full"
  },
{ path:'signup', component: SignupComponent },
{
  path:'login', component: LoginComponent
},

{ path: 'forget', component: ForgetComponent},

{ path: 'home', component: HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
