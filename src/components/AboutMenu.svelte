<script lang="ts">

    export let items: string[];
    export let menu: string;
    export let folderColor: string;

	let visible = false;

	function toggleVissible() {
		visible = !visible;
	}
</script>

<button class="py-3 pl-10 text-lg w-full text-start text-secondary1" class:text-white={visible} on:click={toggleVissible}>
    {#if visible}
        <i class="ri-folder-open-line {folderColor}"></i>
    {:else}
        <i class="ri-folder-2-line {folderColor}"></i>
    {/if}
    {menu}
</button>
{#if visible}
	<ul class="list-style-none text-lg">
        {#each items as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li class="pl-16 text-secondary1 my-1 cursor-pointer" on:click={toggleVissible}>
            <i class="ri-file-code-line"></i>
            {item}
        </li>
        {/each}
	</ul>
{/if}
