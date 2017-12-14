// ====== ./app/app.routes.ts ======

// Imports
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define Component Routes
// import { protoLanding } from './components/prototype.component';
// import { protoCard } from './components/card/card.component';

// Define Pages Routes
import { protoHome } from './pages/home/home.component';
import { protoStyleguide } from './pages/styleguide/styleguide.component';

// Route Configuration
export const routes: Routes = [
	{ path: '', redirectTo: '/pages/home', pathMatch: 'full' }, // Redirect to something

  	// Component Includes
 	// { path: 'components/', component: protoLanding },
 	// { path: 'components/card', component: protoCard },

 	// Pages Includes
 	{ path: 'pages/home', component: protoHome },
 	{ path: 'pages/styleguide', component: protoStyleguide }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
