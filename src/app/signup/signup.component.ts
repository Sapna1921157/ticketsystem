import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private route:Router){

  }
  signup = new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,]),
      lastname:new FormControl('',[Validators.required]),
      number:new FormControl('',[Validators.required,Validators.pattern('[0-9]'),Validators.minLength(9)]),
      email:new FormControl('',[Validators.required, Validators.pattern('[a-z]+[0-9]+@+[a-z]+.+com')]),
      password:new FormControl('',[Validators.required]),
      retype:new FormControl('',[Validators.required]),
    }
   )

   signUp(){
    console.warn(this.signup.value);
    this.route.navigate(['/home'])
     
   }
   get fname(){
    return this.signup.get('firstnamme')
    
   }
   get lname(){
    return this.signup.get('lastnamme')
    
   }
   get num(){
    return this.signup.get('number')
    
   }
   get mail(){
    return this.signup.get('email')
    
   }
   get pass(){
    return this.signup.get('password')
    
   }
   get rety(){
    return this.signup.get('retype')
    
   }

   login(){
    this.route.navigate(['/login'])
   }
}
