<script>
    import Button from "$lib/components/atoms/Button.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
</script>

<DefaultPageTemplate>
    <div class="flex-1 flex flex-col justify-center items-center gap-4">
        <div class="flex flex-col items-center">
            <h1
                class="text-9xl font-[900] text-transparent bg-clip-text bg-gradient-to-t from-stone-400 to-stone-100"
            >
                neso
            </h1>
            <p class="text-stone-400 font-[500]">Your Favorite APOD Explorer</p>
        </div>

        <div class="flex flex-col gap-2">
            <Button link="/apod/today" primary="true">today's picture</Button>
            <Button link="/apod/day">enter a specific date</Button>
            <Button link="/apod/random">get random images</Button>
            <Button link="/apod/calendar">pick from a calendar</Button>
            <Button link="/apod/filter" class="new-tag relative box"
                ><span
                    class="text-xs text-stone-200 bg-stone-950 border border-blue-950 py-1 px-2 rounded-sm absolute -top-1 -left-2"
                    >new</span
                >filter by color</Button
            >
        </div>
    </div>
</DefaultPageTemplate>
