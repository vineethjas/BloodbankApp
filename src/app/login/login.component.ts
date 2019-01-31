import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { LoginService } from '../login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor(
    private loginService:LoginService,
    private router: Router,
    ) { }
  

  ngOnInit() {
    this.login= new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    });
  }

  loginFn(){
    console.log(this.login.value);
    this.loginService.loginformSend(this.login.value).subscribe((res:any) => {
      console.log("response",res);
      this.router.navigateByUrl('/userdashboard')

    })
  }
}
