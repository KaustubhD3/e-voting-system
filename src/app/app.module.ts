import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EvotingComponent } from './evoting/evoting.component';
import { WebcamModule } from 'ngx-webcam'; // Import the WebcamModule
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EvotingComponent, // Declare your component here
  ],
  imports: [
    HttpClientModule,
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    WebcamModule, // Add WebcamModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
