import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-heroe-tarjeta',
	templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
	@Input() valHeroe: any = {};
	@Output() heroeSeleccionado: EventEmitter<number>;
	constructor(private router: Router) {
		this.heroeSeleccionado = new EventEmitter();
	}

	ngOnInit(): void {}

	infoHeroe(id: number) {
		console.log(id);
		console.log(this.heroeSeleccionado.emit(id));
	}
}
