import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDesingComponent } from '../project-desing/project-desing.component';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Detalle_disenio } from 'src/app/logic/detalle_disenio';
import { DetalleService } from 'src/app/services/detalle.service';
import { HttpHeaders } from '@angular/common/http';

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
  detalle: Detalle_disenio;
  selectedFile: File;

  constructor(private detalleService: DetalleService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<OfertarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDesingComponent) {
    this.detalle = new Detalle_disenio();
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

    this.detalle.date = new Date();
    this.detalle.status = "En proceso";
  }

  captureFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  publicOffer() {

    //this.submitted = true;
    //if (this.registerForm.invalid) {
    //  return;
    //}

    const fd = new FormData();
    fd.append('disenio', this.selectedFile, this.selectedFile.name)

    //this.detalle.disenio = this.selectedFile;
    //console.log(this.selectedFile);
    this.detalleService.saveDetailsDesing(fd).subscribe(res => {
      console.log(res.message);
    });
  }

}
