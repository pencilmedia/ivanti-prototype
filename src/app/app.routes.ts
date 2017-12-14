// ====== ./app/app.routes.ts ======

// Imports
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define Pages Routes
import { protoHome } from './pages/home/home.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';
import { protoPages } from './pages/pages.component';
import { protoScratchsheet } from './pages/scratchsheet/scratchsheet.component';

// Route Configuration
export const routes: Routes = [
	{ path: '', redirectTo: '/pages/home', pathMatch: 'full' }, // Redirect to something

 	// Pages Includes
 	{ path: 'pages/home', component: protoHome },
 	{ path: 'pages/styleguide', component: protoStyleguide },
 	{ path: 'pages', component: protoPages },
 	{ path: 'pages/scratchsheet', component: protoScratchsheet }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
