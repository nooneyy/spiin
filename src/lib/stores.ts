import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

const darkMode: Writable<boolean> = writable(false);

if (browser) {
	if (localStorage.getItem('dark')) {
		darkMode.set(JSON.parse(localStorage.getItem('dark') ?? 'false'));
	} else darkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);

	darkMode.subscribe((v) => {
		if (v) {
			document.documentElement.classList.add('dark');
		} else document.documentElement.classList.remove('dark');
	});
}

export { darkMode };
