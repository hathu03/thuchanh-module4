import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AwesomeListComponent } from './components/awesomes/awesome-list/awesome-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AwesomeCreateComponent } from './components/awesomes/awesome-create/awesome-create.component';
import { AwesomeUpdateComponent } from './components/awesomes/awesome-update/awesome-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // @ts-ignore
// import {MatButtonModule} from "@angular/material/button";
// // @ts-ignore
// import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeCreateComponent,
    AwesomeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
