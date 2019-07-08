import { Diseniador } from './../../logic/diseniador';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDesingComponent } from '../project-desing/project-desing.component';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Detalle_disenio } from 'src/app/logic/detalle_disenio';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})

@Injectable()
export class OfertarComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  diseniador:Diseniador;
  detalle:Detalle_disenio;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<OfertarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDesingComponent) { 
      this.diseniador =  new Diseniador();
      this.detalle =  new Detalle_disenio();
    }

    get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      disenio: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    });
  }


  publicoffer() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log("hola")
  }
}
