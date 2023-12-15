import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route:Router){

  }
     loginForm = new FormGroup(
      {
        user:new FormControl('', [Validators.required, Validators.pattern('')]),
        password:new FormControl('',[Validators.required, Validators.minLength(6)]),
      }
     )

     loginUser(){
      console.warn(this.loginForm.value);
      this.route.navigate(['/home'])
     }
   
       get user(){
        return this.loginForm.get('user')
        
       }

       get password(){
        return this.loginForm.get('password')

       }


     signup(){
      this.route.navigate(['/signup'])
     }
     forget(){
      this.route.navigate(['/forget'])
     }
     
}
