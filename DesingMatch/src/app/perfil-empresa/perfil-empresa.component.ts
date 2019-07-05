import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { environment } from './../../environments/environment.prod';
@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.scss']
})
export class PerfilEmpresaComponent implements OnInit {
  n: number;
  object: any;
  listProject: any[];
  showprojects: boolean;
  env = environment;

  constructor(private service: EmpresaService) {
    console.log("ruta de mi perfil")
  }

  ngOnInit() {
    this.loadinfo();
  }

  loadinfo() {
    if (sessionStorage.getItem('n')) {
      this.n = JSON.parse(sessionStorage.getItem('n'));
      if (this.n == 1) {
        sessionStorage.setItem('n', JSON.stringify(2));
        this.env.changeVar=true;
        location.reload();
      }
    }
    if (sessionStorage.getItem('emp')) {
      this.object = JSON.parse(sessionStorage.getItem('emp'));
      console.log(this.object[0].nombre_empresa);
    }
    this.service.projects(this.object[0].id_empresa).subscribe(res => {
      if (res.responseCode == 200) {
        this.showprojects = true;
        this.listProject = res.object;
      }
    });
  }
}
