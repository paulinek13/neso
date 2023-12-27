<script>
    import ApodColors from "$lib/components/molecules/ApodColors.svelte";

    export let url;
    export let hdurl;
    export let thumbnail_url;
    export let media_type;
    export let extended_data;

    export let hd = false;

    let showAsImg =
        !thumbnail_url && !hdurl && media_type !== "image" ? false : true;

    $: imgUrl = media_type === "video" ? thumbnail_url : url;

    const getHostname = (url) => {
        const newUrl = new URL(url);
        return newUrl.hostname;
    };
</script>

{#if showAsImg}
    <div class="flex-1 flex flex-col justify-center">
        <a
            href={hd && hdurl ? hdurl : imgUrl}
            target="_blank"
            class="block flex-1 overflow-hidden"
        >
            <div
                class="bg-cover bg-center hover:scale-125 transition-all duration-300 h-full min-h-[16rem]"
                style="background-image: url({imgUrl})"
            /></a
        >
        <ApodColors
            hex_palette={extended_data?.hex_palette}
            filter_palette={extended_data?.filter_palette}
        ></ApodColors>
    </div>
{:else}
    <a target="_blank" href={url} class="overflow-hidden block flex-1">
        <div
            class="h-full min-h-[16rem] flex flex-col gap-0 justify-center text-center text-sm p-4 bg-gradient-to-br from-slate-900 to-slate-950"
        >
            {#if url}
                <img
                    src="https://icons.duckduckgo.com/ip3/{getHostname(
                        url,
                    )}.ico"
                    alt=""
                    class="min-w-[32px] max-w-[64px] aspect-square self-center m-2"
                />
            {/if}
            <small>Non-image APOD</small> <i>Open in new tab ➚</i>
        </div>
    </a>
{/if}
