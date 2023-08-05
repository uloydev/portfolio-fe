<script lang="ts">
	import { writable } from 'svelte/store';
	import NavItem from './NavItem.svelte';

	let items = [
		{ 
			text:'_hello',
			path: '/',
		},
		{ 
			text:'_about-me',
			path: '/about-me',
		},
		{ 
			text:'_projects',
			path: '/projects',
		},
	];

</script>

<div class="grid grid-cols text-secondary1 grid-cols-4 outline-default rounded-t-lg">
	<div class="flex flex-wrap justify-between items-center py-4 px-8 outline-default rounded-tl-xl">
		<span class="text-xl text-secondary2"> Uloydev </span>
	</div>
	<div class="col-span-3 flex flex-row justify-between">
		<div class="flex flex-row">
			{#each items as item}
				<NavItem data={item} />
			{/each}
		</div>
		<div
			class="outline-default text-secondary2 py-4 px-8 rounded-tr-xl flex items-center cursor-pointer"
		>
			_contact-me
		</div>
	</div>
</div>
