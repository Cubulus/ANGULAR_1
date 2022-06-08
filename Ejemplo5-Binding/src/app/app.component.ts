import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ejemplo5-Binding';

  nombre: string = 'Jorge';
  apellido: string = 'Pasamontes';
  habilitado: boolean=true;

  //CONSTRUCTOR-FUNCION que llama para crear objetos
  constructor() {
      
    setTimeout(()=>{this.habilitado =false;},5000);
  }
    saludar():void{
      alert('Hola bienvenido a Angular I!!!')
    }

}
