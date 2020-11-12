import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
	heroes: Heroe[];
	name: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private _heroesService: HeroesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((parametros) => {
			this.name = parametros['name'];
			this.heroes = this._heroesService.buscarHeroes(parametros['name']);
		});
	}
}
