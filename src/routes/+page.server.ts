import type { PageServerLoad } from './$types';

interface Reward {
	id: string;
	title: string;
	link: string;
	o_link: string;
	disp_time: string;
}

export const load: PageServerLoad = async ({ platform }) => {
	const data = await platform?.env.API_DB.get('db', { cacheTtl: 180 });
	const jsonRewards: Reward[] = JSON.parse(data ?? '[]');
	jsonRewards.map((reward) => {
		const date = new Date(`${reward.disp_time} GMT+0330`);
		const formatOptions: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
		const dateFormatter = new Intl.DateTimeFormat('en-US', formatOptions);
		reward.disp_time = dateFormatter.format(date); // Calling format() directly
	});

	return { jsonRewards };
};
