<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import 'remixicon/fonts/remixicon.css'

	export const ssr = true;
</script>
<div class="p-6 min-h-screen flex flex-col lg:mx-auto lg:p-16">
	<div class="font-fira-code rounded outline-default bg-primary2 flex-grow  flex flex-col">
		<div class="grid grid-cols text-secondary1 lg:grid-cols-4 outline-default">
			<div class="h-16 flex flex-wrap justify-between items-center py-4 px-8 outline-default">
				<span class="text-xl">
					Uloydev
				</span>
				<!-- <span class="text-2xl">X</span> -->
			</div>
			<div class="lg:col-span-3 lg:flex lg:flex-row lg:justify-between">
				<div class="lg:flex lg:flex-row">
					<a href="#" class="h-16 outline-default p-4 block text-white">_lorem-ipsum</a>
					<a href="#" class="h-16 outline-default p-4 block text-white">_lorem-ipsum</a>
					<a href="#" class="h-16 outline-default p-4 block text-white">_lorem-ipsum</a>
					<a href="#" class="h-16 outline-default p-4 block text-white">_lorem-ipsum</a>
				</div>
				<div class="h-16 outline-default text-white p-4">
					_contact-me
				</div>
			</div>
		</div>
		<slot/>
	</div>
</div>