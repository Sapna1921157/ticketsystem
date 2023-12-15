import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  constructor(private route:Router){

  }
  forgetPassword = new FormGroup(
    {
      oldpassword:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      retype:new FormControl('',[Validators.required]),


    }
   )

   reset(){
    console.warn(this.forgetPassword.value);
    this.route.navigate(['/login'])

   }
}
