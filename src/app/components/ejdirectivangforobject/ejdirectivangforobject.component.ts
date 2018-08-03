import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangforobject',
  templateUrl: './ejdirectivangforobject.component.html',
  styleUrls: ['./ejdirectivangforobject.component.css']
})
export class EjdirectivangforobjectComponent implements OnInit {
  alumnos: Object = [
    { id: 1, nombre: 'Israel', edad: 27 },
    { id: 2, nombre: 'El alumno Juan se llama', edad: 23 }
  ];
  constructor() {}

  ngOnInit() {}
}
