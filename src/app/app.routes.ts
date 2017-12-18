// ====== ./app/app.routes.ts ======

// Imports
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define Components
import { mainToolbar } from './components/main-toolbar/main-toolbar.component';
import { mainNav } from './components/main-nav/main-nav.component';
import { protoCard } from './components/card/card.component';

// Define Pages Routes
import { protoHome } from './pages/home/home.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';
import { protoPages } from './pages/pages.component';
import { protoScratchsheet } from './pages/scratchsheet/scratchsheet.component';

// Route Configuration
export const routes: Routes = [
	{ path: '', redirectTo: '/pages/home', pathMatch: 'full' }, // Redirect to something

  	// Component Includes
 	{ path: 'components/main-toolbar', component: mainToolbar },
 	{ path: 'components/main-nav', component: mainNav },
 	{ path: 'components/card', component: protoCard },

 	// Pages Includes
 	{ path: 'pages/home', component: protoHome },
 	{ path: 'pages/styleguide', component: protoStyleguide },
 	{ path: 'pages', component: protoPages },
 	{ path: 'pages/scratchsheet', component: protoScratchsheet }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
