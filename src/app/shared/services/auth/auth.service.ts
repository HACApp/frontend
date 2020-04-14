import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
	providedIn: 'root',
})
/**
 * - get unique id
 * - set name
 * - save name on browser
 */
export class AuthService {
	constructor(private api: ApiService) {}

	register(name: string): void {
		this.api.createNewUser().then(
			(user) =>
				this.api.updateUser(user.id, { id: null, name }).then(
					(value) => {
						localStorage.setItem('userId', user.id);
					},
					(reason) => {
						alert(reason);
					}
				),
			(reason) => {
				alert(reason);
			}
		);
	}

	isUserRegistered(): boolean {
		return localStorage.getItem('userId') !== null;
	}

	getUserId() {
		return localStorage.getItem('userId');
	}
}
