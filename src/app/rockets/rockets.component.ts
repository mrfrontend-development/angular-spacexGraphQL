import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { GetRocketsGQL, Rocket } from '../../generated/graphql'

@Component({
	selector: 'app-rockets',
	templateUrl: './rockets.component.html',
	styleUrls: ['./rockets.component.sass'],
})
export class RocketsComponent implements OnInit {
	protected destroy = new Subject<void>()
	public rockets: Rocket[] = null

	constructor(private rocketsGQL: GetRocketsGQL) {}

	ngOnInit() {
		this.rocketsGQL.watch().valueChanges.subscribe((result) => {
			this.rockets = result.data.rockets
		})
	}
}
