import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//register the SessionService in the AppModule in order to use it
import { SessionService } from "./session.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
