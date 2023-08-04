<script>
	import Game from "../components/Game.svelte";
</script>

<div class="grid grid-cols text-white flex-grow items-center h-full lg:grid-cols-2 lg:justify-center lg:gap-x-32">
	<div class="px-16 flex flex-col h-72 justify-between lg:col-span-1">
		<div>
			<p class="mb-4 text-xl">Hi all. I am</p>
			<p class="text-5xl mb-4">UloyDev</p>
			<pre class="text-xl text-accent2">> Backend Developer</pre>
		</div>
		<div class="text-sm">
			<pre class="text-secondary1">// find my profile on Github :</pre>
			<span class="text-accent2">githubLink</span>
			<span class="text-white">:=</span>
			<a href="https://github.com/uloydev" class="text-accent3 inline">"https://github.com/uloydev"</a>
		</div>
	</div>
	<div class="invisible lg:visible h-full lg:col-span-1 flex flex-col justify-center px-16">
		<Game/>
	</div>
</div>
