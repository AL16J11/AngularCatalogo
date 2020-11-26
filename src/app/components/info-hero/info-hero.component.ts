import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-info-hero',
	templateUrl: './info-hero.component.html',
})
export class InfoHeroComponent {
	heroe: any = {};
	constructor(
		private activatedRoute: ActivatedRoute,
		private _heroeService: HeroesService
	) {
		this.activatedRoute.params.subscribe((parametros) => {
			this.heroe = this._heroeService.getInfoHeroe(parametros['id']);
		});
	}

	ngOnInit(): void {}
}
