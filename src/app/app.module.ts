import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChallengeListPageComponent } from './pages/challenge-list-page/challenge-list-page.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomePageComponent,
		HomePageComponent,
		ChallengeListPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
