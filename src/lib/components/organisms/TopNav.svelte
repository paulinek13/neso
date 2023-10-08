<script>
    import { slide } from "svelte/transition";
    import { navigating } from "$app/stores";
    import ExternalLink2 from "../atoms/ExternalLink2.svelte";

    $: if ($navigating) {
        expanded = false;
    }

    let expanded = false;
</script>

<nav
    class="min-w-[300px] sticky top-0 bg-stone-900 border-b border-stone-800 bg-opacity-80 bg-clip-padding shadow-sm shadow-stone-950 backdrop-blur-sm backdrop-filter z-50 text-stone-300 flex flex-col items-center"
>
    <div class="p-4 flex flex-wrap gap-5 max-w-lg w-full font-[300] text-base">
        <div class="flex flex-wrap gap-3 flex-1">
            <a href="/apod/today">today</a>
            <a href="/apod/day">day</a>
            <a href="/apod/random">random</a>
            <a href="/apod/calendar">calendar</a>
            <!-- <a href="/apod/colors">colors</a> -->
        </div>
        <div class="flex flex-wrap items-center gap-4">
            <a href="/" class="text-blue-500 font-[700] px-2">/</a>
            <button
                on:click={() => {
                    expanded = !expanded;
                }}
                class="text-orange-500 px-2">☰</button
            >
        </div>
    </div>

    {#if expanded}
        <div
            transition:slide={{ duration: 256 }}
            class="p-4 pt-2 flex flex-wrap gap-3 max-w-lg w-full text-sm text-stone-400"
        >
            <ExternalLink2
                url="https://apod.nasa.gov/apod/archivepixFull.html"
                title="Astronomy Picture of the Day Archive"
                text="archive"
            />
            <ExternalLink2
                url="https://apod.nasa.gov/cgi-bin/apod/apod_search"
                title="Astronomy Picture of the Day Searchable Archive"
                text="text search"
            />
        </div>
    {/if}
</nav>
