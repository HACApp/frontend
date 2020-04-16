import { Injectable } from '@angular/core';
import { ChallengeDto } from '../../dtos/challenge.dto';
import { ApiService } from './api.service';

@Injectable()
/**
 * This API Service simulates a backend.
 */
export class SimApiService implements ApiService {
	private readonly dailyChallenge: ChallengeDto = {
		id: 0,
		title: 'asdasdasd',
		description: 'lorem ipsum ...',
		category: 'art',
		durationSeconds: 300,
	};

	private challenges: ChallengeDto[] = [
		{
			id: 1,
			title: 'Challenge 1',
			category: 'creative',
			description:
				'Einfach eine einfache Beschreibung um einfach mal was zu sagen.',
			durationSeconds: 30,
		},
		{
			id: 2,
			title: 'Challenge 2',
			category: 'cooking',
			description:
				'Einfach eine einfache Beschreibung um einfach mal was zu sagen.',
			durationSeconds: 60,
		},
		{
			id: 3,
			title: 'Challenge 3',
			category: 'social',
			description:
				'Einfach eine einfache Beschreibung um einfach mal was zu sagen.',
			durationSeconds: 300,
		},
	];

	async getAllChallenges(): Promise<ChallengeDto[]> {
		return this.challenges;
	}

	async getDailyChallenge(): Promise<ChallengeDto> {
		return this.dailyChallenge;
	}
}
