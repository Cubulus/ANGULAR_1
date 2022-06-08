import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/** 1ª Importación
 *      ↧
 * FormsModule: Exportador de proveedores y directivas necesarias para los formularios
 * basados en plantillas. Poniendo a disposición de los ngModules, que importarán este modulo.
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule // Añadido aqui, se añade directamente en el import de arriba
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
