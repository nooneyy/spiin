<script lang="ts">
	import Reward from '$lib/Reward.svelte';
	import { browser } from '$app/environment';

	interface Reward {
		id: string;
		title: string;
		link: string;
		o_link: string;
		disp_time: string;
	}
	export let data: Reward[];

	const testMobile = () => {
		const userAgent = navigator.userAgent;
		if (/iPad|iPhone|iPod|android/i.test(userAgent)) {
			return true;
		} else return false;
	};

	const onMobile = browser ? testMobile() : false;

	const isCollected = (id: Reward['id']): boolean => {
		if (browser) {
			let collected: Reward['id'][] = JSON.parse(localStorage.getItem('collected') ?? '[]');
			if (collected.includes(id)) {
				return true;
			} else return false;
		} else return false;
	};
</script>

<div class="lg:flex lg:items-center lg:justify-center pt-[5rem] px-1 md:px-0">
	<div
		class="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
	>
		{#each data as reward (reward.id)}
			<div class="w-fit">
				<Reward
					coins={reward.title.includes('Coin')}
					link={onMobile ? reward.link : reward.o_link}
					disp_time={reward.disp_time}
					id={reward.id}
					collected={isCollected(reward.id)}
				/>
			</div>
		{:else}
			<div class="dark:text-white">Loading...</div>
		{/each}
	</div>
</div>
