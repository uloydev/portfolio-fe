<script lang="ts">
    import AboutMenu from "../../components/AboutMenu.svelte";

    let data = [
        {
            menu: "personal-info",
            items: ["bio.go", "interests.go", "education.go"],
            folderColor: "text-accent1",
        },
        {
            menu: "personal-info",
            items: ["bio.go", "interests.go", "education.go"],
            folderColor: "text-accent2",
        },
        {
            menu: "personal-info",
            items: ["bio.go", "interests.go", "education.go"],
            folderColor: "text-accent4",
        }
    ]
</script>

<div class="grid grid-cols-4">
    <div class="col-span-1 outline-default py-8">
        {#each data as value}
            <AboutMenu menu={value.menu} items={value.items} folderColor={value.folderColor}/>
        {/each}
    </div>
</div>