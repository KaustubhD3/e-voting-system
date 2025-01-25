import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EvotingComponent } from './evoting/evoting.component';
import { WebcamModule } from 'ngx-webcam'; // Import the WebcamModule

@NgModule({
  declarations: [
    AppComponent,
    EvotingComponent, // Declare your component here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    WebcamModule, // Add WebcamModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
