<script>
    export let url;
    export let hdurl;
    export let thumbnail_url;
    export let media_type;

    export let hd = false;

    let showAsImg =
        !thumbnail_url && !hdurl && media_type !== "image" ? false : true;

    $: imgUrl = media_type === "video" ? thumbnail_url : hd ? hdurl : url;
</script>

{#if showAsImg}
    <div
        class="overflow-hidden flex-1 flex flex-col justify-center min-h-[256px]"
    >
        <a href={imgUrl} target="_blank" class="block flex-1">
            <div
                class="bg-cover bg-center h-full hover:scale-125 transition-all duration-300"
                style="background-image: url({imgUrl})"
            /></a
        >
    </div>
{:else}
    <a
        target="_blank"
        href={url}
        class="overflow-hidden blockf flex-1 min-h-[128px]"
    >
        <div
            class="bg-cover bg-center h-full hover:scale-125 transition-all duration-300 flex flex-col gap-0 justify-center text-center text-sm p-4"
        >
            <small>Non-image APOD</small> <i>Open in new tab ➚</i>
        </div>
    </a>
{/if}
