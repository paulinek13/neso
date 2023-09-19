<script>
    import "../app.css";
    import TopNav from "../components/TopNav.svelte";
    import { navigating } from "$app/stores";
    import Loader from "../components/Loader.svelte";
</script>

<div
    class="bg-stone-950 text-neutral-300 lg:flex lg:flex-col flex flex-col text-base min-w-[256px] min-h-[100dvh]"
>
    <TopNav />

    <div class="flex-1 flex justify-center">
        {#if $navigating}
            <Loader />
        {:else}
            <slot />
        {/if}
    </div>
</div>
