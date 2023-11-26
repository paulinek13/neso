<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";

    export let data;
    export let hd = false;
</script>

<div class="flex flex-col w-full max-w-xs rounded-sm border border-stone-900">
    <ApodContent
        url={data?.url}
        hdurl={data?.hdurl}
        thumbnail_url={data?.thumbnail_url}
        media_type={data.media_type}
        {hd}
    />

    <div class="px-4 py-2 border-t border-stone-900">
        <h1 class="font-[500] text-lg text-stone-300">
            {data.title}
        </h1>
        <h2 class="font-[300] text-sm text-stone-300">
            <a
                href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply"
                target="_blank">{data.copyright ?? "NASA"}</a
            >
        </h2>
    </div>
</div>
