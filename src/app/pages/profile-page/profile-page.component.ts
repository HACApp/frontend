import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengeDto } from 'src/app/shared/dtos/challenge.dto';
import { UrlResolverService } from 'src/app/shared/services/url-resolver.service';
import { PointsDto } from '../../shared/dtos/points.dto';
import { UserDto } from '../../shared/dtos/user.dto';
import { ApiService } from '../../shared/services/api-service/api.service';
import { StoreService } from '../../shared/services/store/store.service';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
	challenges$: Promise<ChallengeDto[]>;
	points$: Promise<PointsDto>;
	user$: Promise<UserDto>;

	showDataPrivacy = false;
	showRules = false;
	showImprint = false;

	constructor(
		private api: ApiService,
		private router: Router,
		private store: StoreService,
		private urlResolverService: UrlResolverService,
	) {
		this.user$ = api.getMyUser(store.getUserId());
		this.points$ = api.getPointsOfUser();
		this.challenges$ = api.getDoneChallenges();
	}

	ngOnInit(): void { }

	toggleRules(): void {
		this.showRules = !this.showRules;
	}

	toggleDataPrivacy(): void {
		this.showDataPrivacy = !this.showDataPrivacy;
	}

	toggleImprint(): void {
		this.showImprint = !this.showImprint;
	}

	challengeSelect(evt, status) {
		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName('tabcontent');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName('tablinks');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(
				' active',
				''
			);
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(status).style.display = 'block';
		evt.currentTarget.className += ' active';
	}

	getProfilePicture(user: UserDto): string {
		return this.urlResolverService.getProfilePicture(user, ".120x120.webp");
	}

	openProfilePictureEditor() {
		this.router.navigate(["/uploadProfilePicture"]);
	}
}
