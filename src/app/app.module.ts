import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./Page/header/header.component";
import {BodyComponent} from "./Page/body/body.component";
import {FooterComponent} from "./Page/footer/footer.component";
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxGlideModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
