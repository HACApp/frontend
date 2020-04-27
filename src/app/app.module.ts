import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AchievementsPageComponent } from './pages/achievements-page/achievements-page.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChallengeListPageComponent } from './pages/challenge-list-page/challenge-list-page.component';
import { CreateChallengePageComponent } from './pages/create-challenge-page/create-challenge-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChallengeDetailsPageComponent } from './pages/challenge-details-page/challenge-details-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		WelcomePageComponent,
		HomePageComponent,
		ChallengeListPageComponent,
		AchievementsPageComponent,
		CreateChallengePageComponent,
		ChallengeDetailsPageComponent,
		ProfilePageComponent,
		FriendsPageComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
