<script>
	import Game from "../components/Game.svelte";
</script>

<div class="grid text-white flex-grow items-center h-full grid-cols-6 justify-center">
	<div class="flex flex-col h-72 justify-between col-span-2 col-start-2">
		<div>
			<p class="mb-4 text-2xl">Hi all. I am</p>
			<p class="text-7xl mb-4">UloyDev</p>
			<pre class="text-xl text-accent2">> Backend Developer</pre>
		</div>
		<div class="text-lg">
			<pre class="text-secondary1">// find my profile on Github :</pre>
			<span class="text-secondary3">var</span>
			<span class="text-accent2">githubLink</span>
			<span class="text-accent4">string</span>
			<span class="text-white">=</span>
			<a href="https://github.com/uloydev" class="text-accent3 inline">"https://github.com/uloydev"</a>
		</div>
	</div>
	<div class="h-full col-span-3 flex flex-col justify-center pl-8">
		<Game/>
	</div>
</div>
