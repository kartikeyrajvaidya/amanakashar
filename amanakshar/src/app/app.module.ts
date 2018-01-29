import { EmailService } from './email/email.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceareaComponent } from './servicearea/servicearea.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { ContactComponent } from './contact/contact.component';
import { StatComponent } from './stat/stat.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomepageComponent,
    AboutComponent,
    ServiceareaComponent,
    WorkareaComponent,
    ContactComponent,
    StatComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
