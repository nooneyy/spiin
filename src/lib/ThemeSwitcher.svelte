<script lang="ts">
	import { darkMode } from '$lib/stores';
	import { Sun, Moon } from 'lucide-svelte';

	const changeTheme = () => {
		$darkMode = !$darkMode;
		localStorage.setItem('dark', JSON.stringify($darkMode));
	};

	let classes = '';
	export { classes as class };
</script>

<button on:click={changeTheme} class={classes} aria-label="Switch between light/dark modes">
	{#if $darkMode}
		<Sun fill="white" class="hover:stroke-zinc-400 hover:fill-zinc-400 transition-colors" />
	{:else}
		<Moon fill="black" class="hover:stroke-zinc-400 hover:fill-zinc-400 transition-colors" />
	{/if}
</button>
