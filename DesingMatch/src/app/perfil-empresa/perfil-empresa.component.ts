import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnInit {
  n: number;
  object: any;

  constructor() {

  }

  ngOnInit() {
    this.loadinfo();
  }

  loadinfo() {
    if (sessionStorage.getItem('n')) {
      this.n = JSON.parse(sessionStorage.getItem('n'));
      if (this.n == 1) {
        sessionStorage.setItem('n', JSON.stringify(2));
        location.reload();
      }
    }
    if (sessionStorage.getItem('emp')) {
      this.object = JSON.parse(sessionStorage.getItem('emp'));
      console.log(this.object[0].nombre_empresa);
    }
  }
}
