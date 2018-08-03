import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {
  frutas: String[] = ['Manzana', 'Pera', 'Uva'];
  constructor() {}

  ngOnInit() {}
}
