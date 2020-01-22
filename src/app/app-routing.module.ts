import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RocketsComponent } from './rockets/rockets.component'

const routes: Routes = [
	{
		path: '',
		component: RocketsComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
