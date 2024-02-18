<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";
    import ApodCopyright from "$lib/components/molecules/ApodCopyright.svelte";
    import ApodDate from "$lib/components/molecules/ApodDate.svelte";
    import ApodExplanation from "$lib/components/molecules/ApodExplanation.svelte";
    import ApodTitle from "$lib/components/molecules/ApodTitle.svelte";

    export let data;
    export let full = false;
    export let hd = false;
    export let media_first = false;
</script>

<div
    class="flex flex-col gap-1 max-w-2xl w-full {full
        ? ''
        : 'md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-5 max-w-xl md:max-w-6xl xl:max-w-7xl'}"
>
    <div
        class="flex flex-col gap-1 {media_first
            ? 'md:order-first'
            : 'md:order-last'} {full ? '' : 'xl:col-span-2 min-h-80'}"
    >
        <ApodContent {data} {hd} fullImg={full} />
    </div>

    <div class="flex flex-col gap-1 xl:col-span-3">
        <ApodDate {data} />
        <div class="pt-1">
            <ApodTitle {data} />
            <ApodCopyright {data} />
            <div class="h-2 md:h-4" />
            <ApodExplanation {data} />
        </div>
    </div>
</div>
