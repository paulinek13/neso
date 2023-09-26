<script>
    import { fade } from "svelte/transition";
    import "../app.css";
    import { navigating } from "$app/stores";
    import Loader from "../lib/components/atoms/Loader.svelte";
    import TopNav from "../lib/components/organisms/TopNav.svelte";
    import Footer from "../lib/components/organisms/Footer.svelte";
</script>

<div
    class="bg-stone-950 text-stone-300 text-base break-words fixed top-0 left-0 bottom-0 w-full overflow-auto flex flex-col gap-4"
>
    <TopNav />

    <div
        class="min-w-[300px] flex-1 break-words flex flex-col items-center justify-center max-[300px]:bg-red-950 max-[320px]:bg-red-900"
    >
        {#if $navigating}
            <div in:fade><Loader /></div>
        {:else}
            <slot />
        {/if}
    </div>

    <Footer />
</div>
