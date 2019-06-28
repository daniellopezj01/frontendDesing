import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Empresa } from '../models/empresa';
import { MustMatch } from '../models/must-match.validator';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpresaService } from '../services/empresa.service';
import { Injectable } from '@angular/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

@Injectable()
export class RegisterComponent implements OnInit {
  empresa: Empresa;
  registerForm: FormGroup;
  submitted = false;
  maxid: Number;

  constructor(private formBuilder: FormBuilder,private dialog: MatDialog, private service: EmpresaService, private http: HttpClient) {
    this.empresa = new Empresa();

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    this.service.maxId().subscribe(res => {
      this.maxid = res[0].mayor + 1;
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.empresa.url = this.empresa.nombre_empresa + "" + this.maxid;
    this.service.saveEmpresa(this.empresa).subscribe(res => {
      if (res.responseCode == 200) {
        alert(res.message);
        const dialogRef = this.dialog.open(LoginComponent, {
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );
  }
}
