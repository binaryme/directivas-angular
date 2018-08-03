import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivaswitch',
  templateUrl: './ejdirectivaswitch.component.html',
  styleUrls: ['./ejdirectivaswitch.component.css']
})
export class EjdirectivaswitchComponent implements OnInit {
  alumnos: any[] = [
    { nombre: 'Israel Ortiz', aprobado: 'aprobado' },
    { nombre: 'Calderón Arredondo Ricardo', aprobado: 'reprobado' },
    { nombre: 'González Hernández Jaqueline', aprobado: 'aprobado' },
    { nombre: 'Guzmán Cantú Sergio Jesús', aprobado: 'reprobado' },
    { nombre: 'Martínez Leal Julio Isabel', aprobado: 'de panzaso' }
  ];
  constructor() {}

  ngOnInit() {}
}
