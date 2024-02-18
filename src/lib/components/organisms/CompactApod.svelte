<script>
    import ApodContent from "$lib/components/molecules/ApodContent.svelte";
    import ApodCopyright from "$lib/components/molecules/ApodCopyright.svelte";
    import ApodDate from "$lib/components/molecules/ApodDate.svelte";
    import ApodTitle from "$lib/components/molecules/ApodTitle.svelte";

    export let data;
    export let hd = false;
    export let only_one = false;
</script>

<div
    class="flex flex-col rounded-sm max-w-lg {only_one ? '' : 'md:max-w-xs'}"
    style={only_one ? "width: 100%;" : "flex: 0 1 calc(50% - 2px); margin: 0;"}
>
    <ApodContent {data} {hd} />

    <div class="p-2 border border-t-0 border-stone-900 bg-stone-950">
        <ApodDate {data} small />
        <div class="h-1" />
        <ApodTitle {data} small />
        <div class="h-1" />
        <ApodCopyright {data} small />
    </div>
</div>
