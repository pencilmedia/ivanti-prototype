// ====== ./app/app.module.ts ======

// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Declarations
import { AppComponent } from './app.component';

// Material Design Lite
import { MdlModule } from 'angular2-mdl';
import { MdlSelectModule } from '@angular2-mdl-ext/select';

// Angular 2 Material Design
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import 'hammerjs';

// Prototype
import { protoLanding } from './components/prototype.component';
import { protoCard } from './components/card/card.component';

// Pages
import { protoPages } from './pages/pages.component';
import { protoHome } from './pages/home/home.component';
import { protoInventory } from './pages/inventory/inventory.component';
import { protoScratch } from './pages/scratchsheet/scratchsheet.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';

// Routing
import { routing } from './app.routes';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // MD Modules
    // MaterialModule.forRoot(),
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

    // MDL Modules
    MdlModule,
    MdlSelectModule,
    routing
  ],
  declarations: [
    AppComponent,

    // Prototype
    protoLanding,
    protoHome,
    protoInventory,
    protoScratch,
    protoCard,

    // Pages
    protoPages,
    protoStyleguide

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Module Class

}
