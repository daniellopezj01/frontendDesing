
import { HttpClient } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { ClienteComponent } from '../cliente/cliente.component';

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
  url: String;
  password: String;
  env = environment;

  constructor(private http: HttpClient, private service: EmpresaService, private _router: Router, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteComponent) {
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
        alert(`bienvenido señor@ usuario`);
        this.data.showPerfil = true;
        this.dialogRef.close([{ showPerfil: true }]);
        this.url = sessionStorage.getItem('url')
        this._router.navigate([`/${this.url.replace(/['"]+/g, '')}/miPerfil`]);
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
