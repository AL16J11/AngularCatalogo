import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'infoheroe/:id', component: InfoHeroComponent },
	{ path: 'buscador/:name', component: BuscadorComponent },
	//*si no encuentra una concidencia con lo anterior mandar al home
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
