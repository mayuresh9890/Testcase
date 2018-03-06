import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,AbstractControl,NgForm  } from '@angular/forms';
import { isRegExp } from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  password:string = '';
  userId:string = '';

  constructor(private fb: FormBuilder,private router: Router) {
    this.rForm = fb.group({
      'userId' : ['', Validators.compose([
        Validators.required,
        //this.validateEmail,
        //Validators.pattern('(([\w_]+@))||((\d[\d-]*))'),
       //Validators.pattern('(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)||(/^[0-9]{10}/)'),
        //Validators.pattern('[0-9]{10}')
        //Validators.pattern('([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|\d+')
        Validators.email,
      ])],
      'password' : ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,20}')
      ])],
    });
   }
   

  ngOnInit() {
    //this.createForm();
  }

  onSubmit() {
    console.log('Form successful submit.');
    localStorage.setItem('userId', this.rForm.get('userId').value)
    console.log(this.rForm.value);
    this.router.navigateByUrl('/home');
  }

  validateEmail(c:AbstractControl){
    var regEmail : RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var regPhon: RegExp = /^[0-9]{10}/;
    var abc = (regEmail.source+"|"+regPhon.source)
    console.log(abc);
    if(!abc.match(c.value)){
      return { Validateemail: true };
    }else{
      return null;
    }
  }

  ValidateuserId(control: AbstractControl) {
    var regEmail : RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var regPhon: RegExp = /^[0-9]{10}/;
    if(!regEmail.test(control.value) || !regPhon.test(control.value)){
      return { ValidateuserId: true };
    }else{
      return null;
    }
  }

  ValidatepassUpperCase(control: FormControl) {
    var reg: RegExp = /^[A-Z]/;
    if(!reg.test(control.value)){
      return { ValidateuserId: true };
    }else{
      return null;
    }
  }

  ValidatepassLowerCase(control: FormControl) {
    var reg: RegExp = /^[a-z]/;
    if(!reg.test(control.value)){
      return { ValidateuserId: true };
    }else{
      return null;
    }
  }

  Validatepassnumber(control: FormControl) {
    var reg: RegExp = /^[0-9]/;
    if(!reg.test(control.value)){
      return { ValidateuserId: true };
    }else{
      return null;
    }
  }
}
