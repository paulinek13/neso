<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";

    export let data;
    export let hd = false;
    export let media_first = true;
</script>

<div
    class="flex flex-col gap-1 md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-5 max-w-7xl w-full"
>
    <div
        class="flex flex-col gap-1 {media_first
            ? 'md:order-first'
            : 'md:order-last'} border border-stone-900 xl:col-span-2"
    >
        <ApodContent
            url={data?.url}
            hdurl={data?.hdurl}
            thumbnail_url={data?.thumbnail_url}
            media_type={data.media_type}
            extended_data={data?._extended}
            {hd}
        />
    </div>

    <div class="flex flex-col gap-1 xl:col-span-3">
        <a
            href="/apod/day/{data.date}"
            target="_blank"
            class="text-center p-[2px] border border-stone-900 text-sm tracking-widest bg-[#141210]"
        >
            {data.date}
        </a>
        <div class="px-1">
            <a
                href="/apod/day/{data.date}"
                target="_blank"
                class="font-[800] text-stone-300 hover:text-blue-300 text-2xl tracking-wide pt-1"
            >
                {data.title}
            </a>
            <h2 class="font-[300] text-stone-400 text-sm italic">
                <a
                    href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply"
                    target="_blank">{data.copyright ?? "NASA"}</a
                >
            </h2>
            <p class="font-[300] text-[#BFBBB8] mt-2 md:mt-4">
                {data.explanation}
            </p>
        </div>
    </div>
</div>
