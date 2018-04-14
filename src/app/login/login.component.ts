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
  password:string = '';
  userId:string = '';

  constructor(private fb: FormBuilder,private router: Router) {
    this.rForm = fb.group({
      'userId' : ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      'password' : ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,20}')
      ])],
    });
   }

  ngOnInit() {

  }

  onSubmit(data) {
    localStorage.setItem('userId', data.userId)
    this.router.navigateByUrl('/home');
  }
}
