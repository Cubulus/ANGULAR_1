import { Component } from '@angular/core';
/**
 *-------------------/ COMPONENTES EN ANGULAR /----------------------
 *  
 * Un módulo en una app, tendrá una entidad propia y puede estar compuesta por mas de un componente.
 * Un componente, a su vez, sería cada vista (usuario) y además puede estar o no compuiesta por otros
 * componentes; (sin llegar a ser un módulo) y dependerá de la complejidad, profundidad y/o de su reutilización.
 * 
 * A) app.component.ts ↯
 * 
 * SERÁ EL COMPONENTE PRINCIPAL DE LA APLICACIÓN, donde se define la clase del componente (AppComponent)
 * Este componente consta:[@ component Es una palabra reservada para declarar componentes]
 * ⁂ selector: Donde apunta la insercción del componente
 * ⁂ templateUrl: los archivos html. que se usará en el componente
 * ⁂ styleUrls: los archivos css de estilo que usará el template
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo1-Presentacion';
}
