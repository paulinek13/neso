<script>
    import "../app.css";
    import Footer from "$lib/components/organisms/Footer.svelte";
    import LoadingPage from "$lib/components/pages/LoadingPage.svelte";
    import TopNav from "$lib/components/organisms/TopNav.svelte";
    import { fade } from "svelte/transition";
    import { navigating } from "$app/stores";
    import { onMount } from "svelte";

    let ready = false;
    onMount(() => (ready = true));
</script>

{#if ready}
    <div
        class="bg-black text-stone-300 text-base break-words fixed top-0 left-0 bottom-0 w-full overflow-auto flex flex-col gap-4 dot-bg bg-[linear-gradient(to_right,#0c0a09_1px,transparent_1px),linear-gradient(to_bottom,#0c0a09_1px,transparent_1px)] bg-[size:32px_32px]"
        in:fade={{ duration: 256 }}
    >
        <TopNav />

        <div class="min-w-[300px] flex-1 break-words flex flex-col">
            {#if $navigating}
                <LoadingPage></LoadingPage>
            {:else}
                <slot />
            {/if}
        </div>

        <Footer />
    </div>
{/if}
