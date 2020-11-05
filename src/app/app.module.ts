import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		HeroesComponent,
		AboutComponent,
		InfoHeroComponent,
	],
	imports: [BrowserModule, APP_ROUTING],
	providers: [HeroesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
