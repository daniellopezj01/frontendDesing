import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disenios',
  templateUrl: './disenios.component.html',
  styleUrls: ['./disenios.component.scss']
})
export class DiseniosComponent implements OnInit {
  tittle: String;
  constructor() {
    this.tittle = "DesignMatch";
  }

  ngOnInit() {
  }

  showInit(){
    location.href = ``;
  }

}
