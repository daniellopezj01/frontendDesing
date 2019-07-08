import { environment } from '../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

@Injectable()
export class ContainerComponent implements OnInit {
  tittle: String;
  env = environment;
  showPerfil: false

  constructor(private _router: Router, private dialog: MatDialog) {
    this.env.show = true;
    this.tittle = "DesignMatch";
  }


  openDialog(): void {
    //sessionStorage.setItem('obj',JSON.stringify(object));
    const dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('showperfil')) {
      this.showPerfil = JSON.parse(sessionStorage.getItem('showperfil'));
    }
  }

  close() {
    sessionStorage.clear();
    this._router.navigate(['']);
  }
}
