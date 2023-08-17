import type { PageServerLoad } from './$types';

interface Reward {
	id: string;
	title: string;
	link: string;
	o_link: string;
	disp_time: string;
}

export const load: PageServerLoad = async ({ platform }) => {
	const data = await platform?.env.API_DB.get('db', { cacheTtl: 86400 });
	const jsonRewards: Reward[] = JSON.parse(data ?? '[]');

	return { jsonRewards };
};
