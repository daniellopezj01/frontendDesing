import { RegisterComponent } from './../register/register.component';
import { HttpClient } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  email: String;
  password: String;

  constructor(private http: HttpClient, private service: EmpresaService, private _router:Router, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public datad: RegisterComponent) {

    // if (sessionStorage.getItem('obj')) {
    // this.object = JSON.parse(sessionStorage.getItem('obj'));
    // }
  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ingresar() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.service.login({ "email": this.email, "password": this.password }).subscribe(res => {
      if (res.responseCode == 200) {
        sessionStorage.setItem('emp', JSON.stringify(res.object));
        sessionStorage.setItem('showperfil', JSON.stringify(true));
        sessionStorage.setItem('n', JSON.stringify(1));
        this.dialogRef.close();
        alert(`bienvenido señor@ usuario`);
        this._router.navigate(['miPerfil']);
      } else {
        alert("datos incorrectos");
        this.cleaninput();
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );
  }

  cleaninput() {
    this.email = "";
    this.password = "";
  }
}
