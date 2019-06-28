import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {
  showPerfil:false
 
  title = 'app';
  constructor(private dialog: MatDialog){

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
}
