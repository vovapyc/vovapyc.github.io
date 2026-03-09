import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const prerender = true;

export const load = async () => {
	if (browser) {
		posthog.init('phc_VJrwFwDRz9fNGqZWL5iak91Sk2EdONawdQX1WEGkA6R', {
			api_host: 'https://pineapple.byvova.com',
			defaults: '2026-01-30'
		});
	}
};
