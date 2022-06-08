/**
 * ---------------------------/ LOS MODULOS /------------------------------
 * 
 * I) CARACTERISTICAS:
 *    a. Son las piezas mas grandes que se puede dividir una aplicación (Angular, react, ExpoGo)
 *    b. Serán piezas que podremos reciclar, reutilizar, dentro de nuestro proyecto.
 *    c. Angular nos ofrecerá módulos nativos como HTTP, browser, Form, bootstrap,...
 * 
 * II) CATEGORIAS:
 *    a. Nativos: Proveedor Angular
 *    b. Terceros: Proveedor Github
 *    c. Propios
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/**
 * @ NgModule será nuevamente palabra reservada para declarar un módulo, que contiene 4 arrays:
 * 
 * 1. declarations: Lista de componentes
 * 2. imports: Lista de módulos
 * 3. providers: Lista de servicios
 * 4. componentes de inicio
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
package.json
↧
Es el archivo de configuraciones;
Aqui se contienen las dependencias/paquetes de Angular, que vayamos a utilizar
en nuestra aplicación. Asi mismo, a través de Angular Cli (via npm), se ha encargado
de instalar por nosotros en la carpeta node_module.

La carpeta node_module, son las librerias indispensables para la ejecución de nuestra
aplicación (SPA). No obstante, no hay limitaciones, podremos seguir añadiendo nuevas
librearias para cubrir otras futuras funcionalidades o requisitos que vaya o fuera a
necesitar nuestro proyecto.
*/