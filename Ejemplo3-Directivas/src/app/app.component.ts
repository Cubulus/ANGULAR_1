import { Component } from '@angular/core';
@Component({
  selector: 'app-root',                   //Va a mostrarse aqui
  templateUrl: './app.component.html',    //Va a desarrollarse aqui
  styleUrls: ['./app.component.css']      //Va a decorarse aqui
})
export class AppComponent {

alumnos: any =[
{valoracion:'alta', repetidor:false, nombre:'Juan', apellidos:'Lopez', nota:7.5},
{valoracion:'media', repetidor:false, nombre:'Maria', apellidos:'Sanchez', nota:5.8},
{valoracion:'baja', repetidor:true, nombre:'Elena', apellidos:'Arias', nota:3.5},
{valoracion:'media', repetidor:true, nombre:'Roberto', apellidos:'Rodriguez', nota:6.4},
{valoracion:'baja', repetidor:false, nombre:'Javier', apellidos:'Martin', nota:4.1},
{valoracion:'alta', repetidor:false, nombre:'Marta', apellidos:'Gonzalez', nota:8.3}
];

/*
 -----------ARRAY---------
 TypeScript, permite el tranbajo con arrays, de la misma manera que JavaScript.
 Podemos definir los array de la siguiente manera:
 
 let lista: number[]=[1,2,3];
 */
}
