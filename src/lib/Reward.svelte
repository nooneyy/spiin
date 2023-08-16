<script lang="ts">
	import { Coins, PlusIcon as Plus, BatteryCharging as Spins } from 'lucide-svelte';
	import Collect from '$lib/Collect.svelte';
	interface Props {
		coins?: boolean;
		link: string;
		disp_time: string;
		collected?: boolean;
		id: string;
	}

	export let coins: boolean | undefined = false,
		link: string,
		disp_time: string,
		collected: boolean | undefined = false,
		id: string;

	let props: Props = {
		coins,
		link,
		disp_time,
		collected,
		id
	};
</script>

<div
	class="dark:text-white flex bg-zinc-100 dark:bg-zinc-900 p-2 rounded-xl items-center justify-center transition-colors"
>
	<div
		class={`bg-zinc-200 dark:bg-zinc-800 rounded-lg flex space-x-1 md:space-x-2 items-center justify-center transition-colors
        ${props.coins ? 'p-3 md:p-4' : 'px-[2.751rem] py-3 md:py-4 md:px-[3.25rem]'}
      `}
	>
		{#if props.coins}
			<Spins size={32} />
			<Plus />
			<Coins size={32} />
		{:else}
			<Spins size={32} />
		{/if}
	</div>
	<div
		class="flex items-center bg-[#ececf0] dark:bg-[#121215] p-2 rounded-lg transition-colors ml-2"
	>
		<div
			class="flex flex-col bg-zinc-200 ml-2 md:pr-8 dark:bg-zinc-800 rounded-lg p-2 transition-colors"
		>
			<p class="text-sm md:text-base font-semibold md:font-bold underline">
				{props.coins ? 'Spins + Coins' : 'Spins'}
			</p>
			<p class="text-xs md:text-sm text-zinc-700 dark:text-zinc-200 transition-colors">
				{props.disp_time}
			</p>
		</div>
		<Collect
			class="font-semibold bg-zinc-200 dark:bg-zinc-800 rounded-lg ml-4 mr-2 px-4 py-2 transition-color hover:bg-zinc-300 hover:dark:bg-zinc-900 transition-colors select-none"
			collected={props.collected}
			id={props.id}
			link={props.link}
		/>
	</div>
</div>
