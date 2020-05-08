import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ApiService } from '../../shared/services/api/api.service';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
	submitted = false;
	nameIsAlreadyInUse = false;
	showDataPrivacy = false;
	showRules = false;

	registrationForm = new FormGroup({
		name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(30),
			Validators.pattern('([a-zA-Z0-9 ])+'),
		]),
		dataPrivacy: new FormControl(false, [Validators.requiredTrue]),
		rules: new FormControl(false, [Validators.requiredTrue]),
	});

	constructor(
		public auth: AuthService,
		private router: Router,
		private api: ApiService
	) {
		this.auth
			.checkUserRegistered()
			.then((registered) => {
				if (registered) {
					this.router
						.navigate(['/'])
						.catch((reason) =>
							alert('Es gab einen Fehler bei der Weiterleitung')
						);
				}
			})
			.catch(api.getDefaultExceptionHandler);
	}

	ngOnInit(): void {}

	saveName(): void {
		this.submitted = true;

		if (this.registrationForm.valid) {
			const name = this.registrationForm.get('name').value;

			this.auth.register(name).then(
				(value) => {
					this.router
						.navigate(['/'])
						.catch((reason) =>
							alert('Es gab einen Fehler bei der Weiterleitung')
						);
				},
				(reason) => {
					this.nameIsAlreadyInUse = true;
				}
			);
		}
	}

	toggleDataPrivacy(): void {
		this.showDataPrivacy = !this.showDataPrivacy;
	}

	toggleRules(): void {
		this.showRules = !this.showRules;
	}
}
