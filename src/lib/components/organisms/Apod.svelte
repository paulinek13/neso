<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";
    import ApodCopyright from "$lib/components/molecules/ApodCopyright.svelte";
    import ApodDate from "$lib/components/molecules/ApodDate.svelte";
    import ApodExplanation from "$lib/components/molecules/ApodExplanation.svelte";
    import ApodTitle from "$lib/components/molecules/ApodTitle.svelte";

    export let data;
    export let hd = false;
    export let media_first = true;
</script>

<div
    class="flex flex-col gap-1 md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-5 max-w-xl md:max-w-6xl xl:max-w-7xl w-full"
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
        <ApodDate {data} />
        <div class="px-2 pt-1">
            <ApodTitle {data} />
            <ApodCopyright {data} />
            <div class="h-2 md:h-4" />
            <ApodExplanation {data} />
        </div>
    </div>
</div>
