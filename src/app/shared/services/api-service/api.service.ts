import { ChallengeState } from '../../dtos/challenge-state.enum';
import { Category } from '../../dtos/category';
import { ChallengeDto } from '../../dtos/challenge.dto';

import { UserDto } from '../../dtos/user.dto';

export abstract class ApiService {
	public getDailyChallenge(): Promise<ChallengeDto> {
		throw new Error('Method not implemented.');
	}

	public createNewChallenge(
		challenge: ChallengeDto
	): Promise<ChallengeDto | string> {
		throw new Error('Method not implemented.');
	}

	public getChallengeById(id: number): Promise<ChallengeDto> {
		throw new Error('Method not implemented.');
	}

	public getChallenges(
		category: Category,
		page: number,
		size: number
	): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public deleteChallenge(
		challengeId: number
	): Promise<ChallengeDto | string> {
		throw new Error('Method not implemented.');
	}

	public getRandomChallenge(category: Category): Promise<ChallengeDto> {
		throw new Error('Method not implemented.');
	}

	createNewUser(user: UserDto): Promise<UserDto> {
		throw new Error('Method not implemented.');
	}

	public changeChallengeState(
		challenge: ChallengeDto,
		state: ChallengeState
	): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public getCreatedChallenges(user: UserDto): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public getDoneChallenges(user: UserDto): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public getRememberedChallenges(user: UserDto): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public getActiveChallenges(user: UserDto): Promise<ChallengeDto[]> {
		throw new Error('Method not implemented.');
	}

	public rememberChallenge(
		user: UserDto,
		challenge: ChallengeDto
	): Promise<ChallengeDto> {
		throw new Error('Method not implemented.');
	}
}
