import { PerfilEmpresaComponent } from './../perfil-empresa/perfil-empresa.component';
import { Proyecto } from './../models/proyecto';
import { HttpClient } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

@Injectable()
export class CreateProjectComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  url: String;
  proyecto: Proyecto;
  titulo: String;
  messageButton:String;

  constructor(private http: HttpClient, private service: ProyectoService, private _router: Router, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public dataperfil: PerfilEmpresaComponent) {
    this.proyecto = new Proyecto();
    this.proyecto.descripcion = "";
    this.proyecto.id_empresa = JSON.parse(sessionStorage.getItem('id'));
  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      valor_pagar: ['', [Validators.required]]
    });
    this.loadinfo();
  }

  loadinfo() {
    if (this.dataperfil.name == 1) {
      this.titulo = "Crear Proyecto";
      this.messageButton = "Crear";
    } else if (this.dataperfil.name == 2) {
      this.titulo = "Actualizar Proyecto";
      this.proyecto = this.dataperfil.actualproject;
      this.messageButton = "Actualizar";
    }
  }

  CreateOrUpdateProject() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.dataperfil.name == 1) {
      this.saveProject();
   
    } else if (this.dataperfil.name == 2) {
      this.updateProject();
    }
  }

  saveProject() {
    this.service.saveProject(this.proyecto).subscribe(res => {
      if (res.responseCode == 200) {
        this.dialogRef.close();
        alert(`Proyecto Creado`);
        // this._router.navigate([`/cliente/${this.url.replace(/['"]+/g, '')}/miPerfil`]);
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );
  }

  updateProject(){
    this.service.UpdateProject(this.proyecto).subscribe(res => {
      if (res.responseCode == 200) {
        this.dialogRef.close();
        alert(res.message);
        // this._router.navigate([`/cliente/${this.url.replace(/['"]+/g, '')}/miPerfil`]);
      }
    },
      err => {
        console.log("Error occured" + err);
      }
    );
  }
}

