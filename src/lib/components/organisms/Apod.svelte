<script>
    export let data;
    export let hd = false;

    export let media_first = true;
</script>

<div
    class="flex flex-col max-w-2xl gap-1 lg:gap-4 lg:grid lg:grid-cols-2 lg:max-w-7xl"
>
    <a
        href={hd ? data.hdurl : data.url}
        target="_blank"
        class="overflow-hidden border border-stone-800 bg-black flex {media_first
            ? 'lg:order-first'
            : 'lg:order-last'}"
        ><img
            class="m-auto"
            src={hd ? data.hdurl : data.url}
            alt={data.title}
        /></a
    >

    <div class="flex flex-col self-center">
        <a
            href="/apod/day/{data.date}"
            target="_blank"
            class="text-center p-1 bg-stone-900 border border-stone-800 text-base lg:text-lg"
        >
            {data.date}
        </a>
        <div class="p-1 pt-2">
            <h1 class="font-[700] text-xl lg:text-2xl text-stone-300">
                {data.title}
            </h1>
            <h2 class="font-[300] text-sm lg:text-lg text-stone-300 italic">
                <a
                    href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply"
                    target="_blank">{data.copyright ?? "NASA"}</a
                >
            </h2>
            <p class="font-[300] text-stone-400 text-sm lg:text-base pt-2">
                {data.explanation}
            </p>
        </div>
    </div>
</div>
