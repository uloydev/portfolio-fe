<script lang="ts">
	import { page } from '$app/stores';


	export let data = {
		text: '_lorem',
		path:'ipsum'
	};


    $: isActive = data.path == $page.url.pathname;
</script>

<div class="outline-default p-4 text-secondary1 cursor-pointer flex items-center" 
class:text-white={isActive}>
	<a href="{data.path}" class:nav-active={isActive}>
        {data.text}
    </a>
</div>
