<script>
    import "../app.css";
    import TopNav from "../components/TopNav.svelte";
</script>

<div
    data-sveltekit-preload-data="off"
    class="bg-stone-950 text-neutral-300 lg:flex lg:flex-col flex flex-col text-base min-w-[256px] min-h-[100dvh]"
>
    <TopNav />

    <div class="flex-1 flex justify-center">
        <slot />
    </div>
</div>
