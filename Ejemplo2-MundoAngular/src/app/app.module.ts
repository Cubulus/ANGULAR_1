import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * BrowserModule: Exporta la infraestructura requerida por todas las aplicaciones
 * angulares. Incluido por defecto, en todas las aplicaciones angulares creadas 
 * con el new del comando Cli (AngularCli).
 */
import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
