import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resource } from 'selenium-webdriver/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnChanges {

  signupForm: any;
  private group = 'user';
  datas: any;

  constructor(
    private loginService:LoginService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    /* this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  */
    this.signupForm=new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      bloodGroup:new FormControl('0', Validators.required),
      location:new FormControl('0', Validators.required),
      password:new FormControl('', Validators.required),
      confirm:new FormControl('', Validators.required),

    })
    
  }

  onSubmit(){
    const data = this.signupForm.value;

      this.loginService.signupformSend(data).subscribe((res:any)=>{
        console.log("response",res);
        if (res.status == '1') {
          Swal.fire('Success', '', 'success');
          this.route.navigateByUrl('/');
        }else {
          Swal.fire('Failed', res.error, 'error')
        }
      });
    
  }
  ngOnChanges(){
    console.log(this.signupForm)
  }

}
