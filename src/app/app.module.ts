import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';
import { AppComponent } from './app.component';

// Include MD animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Include MD components
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
// Include gesture support
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MD Modules
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatTabsModule, 
    MatSelectModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
