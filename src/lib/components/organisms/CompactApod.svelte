<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";

    export let data;
    export let hd = false;
    export let only_one = false;
</script>

<div
    class="flex flex-col rounded-sm border border-stone-900 max-w-lg {only_one
        ? ''
        : 'md:max-w-xs'}"
    style={only_one ? "width: 100%;" : "flex: 0 1 calc(50% - 2px); margin: 0;"}
>
    <ApodContent
        url={data?.url}
        hdurl={data?.hdurl}
        thumbnail_url={data?.thumbnail_url}
        media_type={data.media_type}
        extended_data={data?._extended}
        {hd}
    />

    <div class="p-1 px-2 border-t border-stone-900">
        <span class="text-xs tracking-wide block">{data.date}</span>
        <a
            href="/apod/day/{data.date}"
            target="_blank"
            class="font-[700] text-sm text-stone-300 hover:text-blue-300 block"
        >
            {data.title}
        </a>
        <h2 class="font-[300] text-xs text-stone-300">
            <a
                href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply"
                target="_blank">{data.copyright ?? "NASA"}</a
            >
        </h2>
    </div>
</div>
