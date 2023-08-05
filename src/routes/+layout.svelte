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

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	export const ssr = true;
</script>
<div class="min-h-screen flex flex-col mx-auto px-16 py-10 bg-primary3">
	<div class="font-fira-code rounded-xl outline-default bg-primary2= flex-grow flex flex-col">
		<Navbar/>
		<slot/>
		<Footer/>
	</div>
</div>