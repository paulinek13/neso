<script>
    import "../app.css";
</script>

<div
    class="bg-stone-950 text-neutral-300 lg:flex lg:flex-col flex flex-col my-class text-base"
>
    <div
        class="sticky top-0 flex flex-wrap gap-4 bg-stone-900 border-b border-stone-800 bg-opacity-80 bg-clip-padding px-4 py-2 shadow-sm shadow-neutral-950 backdrop-blur-sm backdrop-filter z-50 text-neutral-400 items-center"
    >
        <a class="text-blue-500" href="/">home</a>
        <a href="/apod/today">today</a>
        <a href="/apod/day">day</a>
        <a href="/apod/random">random</a>
        <span class="flex-1" />
        <a
            class="border border-stone-700"
            href="https://github.com/paulinek13/neso"
            ><img
                alt="Static Badge"
                src="https://img.shields.io/badge/repo-171717?style=for-the-badge&logo=github"
            /></a
        >
    </div>

    <div class="flex-1 flex justify-center">
        <slot />
    </div>
</div>

<style>
    .my-class {
        min-height: 100vh;
        min-height: 100dvh;
    }
</style>
