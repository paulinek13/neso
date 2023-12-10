<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";

    export let data;
    export let hd = false;
    export let media_first = true;
</script>

<div
    class="flex flex-col max-w-2xl gap-1 lg:gap-2 lg:grid lg:grid-cols-2 lg:max-w-7xl"
>
    <div
        class="flex flex-col gap-1 {media_first
            ? 'lg:order-first'
            : 'lg:order-last'} border border-stone-800"
    >
        <ApodContent
            url={data?.url}
            hdurl={data?.hdurl}
            thumbnail_url={data?.thumbnail_url}
            media_type={data.media_type}
            {hd}
        />
    </div>

    <div class="flex flex-col gap-1 w-full">
        <a
            href="/apod/day/{data.date}"
            target="_blank"
            class="text-center p-1 bg-stone-900 border border-stone-800 text-base lg:text-lg"
        >
            {data.date}
        </a>

        <div class="p-1 pt-1">
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
