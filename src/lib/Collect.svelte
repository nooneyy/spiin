<script lang="ts">
	import { Check } from 'lucide-svelte';

	let classes = '';

	interface Props {
		link: string;
		collected?: boolean;
		id: string;
	}

	export let link: string,
		collected: boolean | undefined = false,
		id: string;
	export { classes as class };

	let props: Props = {
		link,
		collected,
		id
	};

	const addToCollected = (id: string) => {
		if (localStorage.getItem('collected')) {
			let collected: Props['id'][] = JSON.parse(localStorage.getItem('collected') || '[]');
			if (!collected.includes(id)) {
				collected.push(id);
				localStorage.setItem('collected', JSON.stringify(collected));
			}
		} else {
			localStorage.setItem('collected', JSON.stringify([id]));
		}
	};

	const handleClick = () => {
		window.open(props.link);
		addToCollected(props.id);
		collected = true;
	};
</script>

<button
	class={classes}
	class:px-[28.83px]={collected}
	on:click={handleClick}
	aria-label={collected ? 'Collected' : 'Collect'}
>
	{#if collected}
		<Check />
	{:else}
		Collect
	{/if}
</button>
