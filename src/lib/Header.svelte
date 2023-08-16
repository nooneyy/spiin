<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';

	const debounce = (func: () => void, delay: number) => {
		let timer: ReturnType<typeof setTimeout>;
		let immediateExecution = true;

		return (): void => {
			if (immediateExecution) {
				func();
				immediateExecution = false;
			}

			clearTimeout(timer);
			timer = setTimeout(() => {
				immediateExecution = true;
				func();
			}, delay);
		};
	};

	const throttledScrollHandler = debounce(() => {
		if (document.documentElement.scrollTop > 0) {
			document.getElementById('header')?.classList.remove('border-transparent');
			document.getElementById('header')?.classList.add('border-zinc-100', 'dark:border-zinc-900');
		} else {
			document
				.getElementById('header')
				?.classList.remove('border-zinc-100', 'dark:border-zinc-900');
			document.getElementById('header')?.classList.add('border-transparent');
		}
	}, 150);
</script>

<svelte:document on:scroll={throttledScrollHandler} />
<div
	id="header"
	class="fixed top-0 w-full bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm flex items-center p-4 xl:px-72 justify-center lg:justify-start transition-colors border-b-2 border-transparent"
>
	<a href="/" class="no-select">
		<img src={logo} alt="Spiin logo" class="min-w-[90px] no-select p-1" />
	</a>
	<ThemeSwitcher class="ml-auto p-1 dark:text-white" />
</div>

<style>
	.no-select {
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
</style>
