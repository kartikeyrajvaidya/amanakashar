import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomepageComponent,
    AboutComponent,
    ServiceareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
