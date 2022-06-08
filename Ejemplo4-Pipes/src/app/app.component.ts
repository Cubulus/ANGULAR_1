import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  texto: string ="Bienvenido al Mundo Angular";
  numero: number = 7788.6545689987;
  porcentaje: number = 0.54886;
  fecha: Date = new Date();
  jsonObjeto={nombre:'Juan', edad:36, telefono:{tel1:916543289,tel2:616123456}};
}
