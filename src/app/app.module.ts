import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

// Include MD animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Include MD components
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
// Include gesture support
import 'hammerjs';

// Pages
import { protoHome } from './pages/home/home.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';

// Routing
import { routing } from './app.routes';

@NgModule({
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
    // Routing
    routing
  ],
  declarations: [
    AppComponent,

      // Routes (Pages)
      protoHome,
      protoStyleguide

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
