import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styles: [],
})
export class HeroesComponent implements OnInit {
	heroes: Heroe[] = [];

	constructor(private _heroresService: HeroesService, private router: Router) {
		console.log('Servicio heroe listo para usar en heroes components');
	}

	ngOnInit(): void {
		this.heroes = this._heroresService.getHeroes();
		console.log(this.heroes);
	}

	infoHeroe(id: number): Heroe {
		this.router.navigate(['/infoheroe', id]);
		for (let i = 0; i < this.heroes.length; i++) {
			if ((this.heroes[i].id = i)) {
				return this.heroes[i];
			}
		}
	}
}
