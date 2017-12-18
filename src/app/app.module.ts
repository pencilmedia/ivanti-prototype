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

// Components
import { mainToolbar } from './components/main-toolbar/main-toolbar.component';
import { mainNav } from './components/main-nav/main-nav.component';
import { protoCard } from './components/card/card.component';

// Pages
import { protoHome } from './pages/home/home.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';
import { protoPages } from './pages/pages.component';
import { protoScratchsheet } from './pages/scratchsheet/scratchsheet.component';

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

    // Components
    mainToolbar,
    mainNav,
    protoCard,

    // Routes (Pages)
    protoHome,
    protoStyleguide,
    protoPages,
    protoScratchsheet

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
