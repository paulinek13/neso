<script>
    import { slide } from "svelte/transition";

    let expanded = false;
</script>

<div
    class="sticky top-0 bg-stone-900 border-b border-stone-800 bg-opacity-80 bg-clip-padding shadow-sm shadow-neutral-950 backdrop-blur-sm backdrop-filter z-50 text-neutral-400 flex flex-col p-4"
>
    <div class="flex flex-wrap gap-4 justify-center items-center">
        <div class="flex flex-wrap gap-4 items-center justify-center">
            <a href="/" class="text-blue-600 font-medium">home</a>
            <a href="/apod/today">today</a>
            <a href="/apod/day">day</a>
            <a href="/apod/random">random</a>
            <a href="/apod/calendar">calendar</a>
        </div>
        <button
            on:click={() => {
                expanded = !expanded;
            }}
            class="active:bg-stone-800 text-orange-500">☰</button
        >
    </div>

    {#if expanded}
        <div
            transition:slide
            class="flex flex-wrap gap-4 pt-4 items-center justify-center"
        >
            <a
                class="border border-stone-700"
                href="https://github.com/paulinek13/neso"
                target="_blank"
                ><img
                    alt="Static Badge"
                    src="https://img.shields.io/badge/repo-171717?style=for-the-badge&logo=github"
                /></a
            >
            <a
                href="https://apod.nasa.gov/apod/archivepixFull.html"
                title="Astronomy Picture of the Day Archive"
                target="_blank">APOD archive ➚</a
            >
        </div>
    {/if}
</div>
