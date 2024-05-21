import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginform! : FormGroup;
  constructor(private fb : FormBuilder, private authService : AuthService, private router : Router){

  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }

  login(){
    let username = this.loginform.value.username;
    let password = this.loginform.value.password;
    let auth:boolean = this.authService.login(username, password);
    if(auth==true){
        this.router.navigateByUrl("/client")
    }
  }

}
