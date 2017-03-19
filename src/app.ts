import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'home-view',
	template: `<h3>Home View</h3>`
})
export class HomeView {}

@Component({
	selector: 'demo-app',
	template: `
	  <h1>Angular 4 with Webpack and Express</h1>
	  <a routerLink="/">Home</a>
	  <a routerLink="/lazy">Lazy</a>
		<a routerLink="/crazy">Crazy</a>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent {}

@NgModule({
	imports: [
		BrowserModule.withServerTransition({
		  appId: 'ng4-demo'
		}),
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full'},
			{ path: 'lazy', loadChildren: './lazy.module#LazyModule'}
		])
	],
	declarations: [ AppComponent, HomeView ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
