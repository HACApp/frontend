import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { StoreService } from '../store/store.service';
import { UserDto } from '../../dtos/user.dto';

@Injectable({
	providedIn: 'root',
})
/**
 * - get unique userId
 * - set userName
 * - save userName on browser
 */
export class AuthService {
	constructor(private store: StoreService, private api: ApiService) {}

	register(name: string): Promise<void> {
		const userO: UserDto = {
			userId: null,
			privateUserId: null,
			userName: name,
		};
		return this.api.createNewUser(userO).then((user) => {
			this.store.setPublicUserId(user.userId);
			this.store.setUserId(user.privateUserId);
		});
	}

	isUserRegistered(): boolean {
		return this.store.getUserId() !== null;
	}
}
