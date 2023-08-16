<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Rewards from '$lib/Rewards.svelte';
	import Footer from '$lib/Footer.svelte';

	interface Reward {
		id: string;
		title: string;
		link: string;
		o_link: string;
		disp_time: string;
	}

	export let data: { jsonRewards: Reward[] };
	let rewards = data.jsonRewards;
</script>

<svelte:head>
	<title>Spiin - CM Rewards</title>
	<meta name="description" content="An ad-free aggregator for Coin Master rewards." />
</svelte:head>

<main class="subpixel-antialiased">
	<Header />
	<Rewards data={rewards} />
	<Footer />
</main>
