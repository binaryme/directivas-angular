import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif2',
  templateUrl: './ejdirectivangif2.component.html',
  styleUrls: ['./ejdirectivangif2.component.scss']
})
export class Ejdirectivangif2Component implements OnInit {
  capital: String;
  constructor() {}

  ngOnInit() {}
  setResultado() {
    return this.capital === 'Ciudad de México' ? true : false;
  }
}
