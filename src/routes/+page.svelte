<script>
    import MainFooter from "../components/MainFooter.svelte";
</script>

<div class="w-full flex flex-col">
    <div class="flex-1 flex flex-col justify-center items-center gap-4">
        <span class="flex-1" />
        <div class="text-center flex gap-2 text-neutral-200 text-2xl flex-col">
            <h1>front-end to NASA's</h1>
            <div>
                <a
                    class="inline-block"
                    target="_blank"
                    href="https://api.nasa.gov"
                    ><img
                        alt="Static Badge"
                        src="https://img.shields.io/badge/APOD%20API-171717?style=for-the-badge&logo=nasa"
                    /></a
                >
            </div>
        </div>
        <div
            class="gap-2 flex flex-col flex-wrap justify-center lg:max-w-lg text-center"
        >
            <a
                class="px-8 py-2 rounded-sm text-neutral-100 bg-orange-700 font-bold"
                href="/apod/today">today's picture</a
            >
            <a
                class="px-8 py-2 rounded-sm text-neutral-200 bg-neutral-800"
                href="/apod/day">enter a specific date</a
            >
            <a
                class="px-8 py-2 rounded-sm text-neutral-200 bg-neutral-800"
                href="/apod/random">get random images</a
            >
        </div>
        <span class="flex-1" />
        <MainFooter />
    </div>
</div>
