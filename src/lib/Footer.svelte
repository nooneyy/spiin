<script lang="ts">
	import { Copyright, Hammer, Zap, Github } from 'lucide-svelte';
</script>

<div class="flex flex-col gap-2 items-center justify-center dark:text-white py-8">
	<div class="flex gap-2 items-center">
		<Copyright size="18px" />
		<div class="flex gap-1 items-center">
			<p class="font-semibold">2023 nooney.</p>
			<button
				class="font-semibold underline decoration-current decoration-2"
				on:click={() => window.open('https://choosealicense.com/licenses/agpl-3.0')}
				>GNU AGPLv3</button
			>
		</div>
	</div>
	<button
		class="flex gap-[6px] items-center"
		on:click={() => window.open('https://github.com/nooneyy/spiin')}
	>
		<Github size="20px" />
		<p class="font-semibold underline decoration-current decoration-2">spiin</p>
	</button>
	<div class="flex gap-2 items-center justify-center">
		<div class="flex gap-2 items-center">
			<Hammer size="20px" />
			<button
				on:click={() => window.open('https://kit.svelte.dev/')}
				class="underline decoration-orange-500 decoration-2"
			>
				SvelteKit
			</button>
		</div>
		<div class="flex gap-2 items-center">
			<Zap size="20px" />
			<button
				on:click={() => window.open('https://pages.cloudflare.com/')}
				class="underline decoration-orange-500 decoration-2"
			>
				Cloudflare
			</button>
		</div>
	</div>
</div>
