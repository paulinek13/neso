<script>
    import ColorPalette from "../molecules/ColorPalette.svelte";
    import axios from "axios";
    export let data;
    export let hd = false;
    export let extended_data = {};

    axios
        .request({
            timeout: 5000,
            signal: AbortSignal.timeout(5000),
            method: "GET",
            url: `https://apod-exended.pages.dev/${data.date.replace(
                /-/g,
                "/"
            )}.json`,
        })
        .then((res) => {
            extended_data = res.data;
        })
        .catch((err) => {});
</script>

<div class="flex flex-col w-full max-w-xs border border-stone-800 rounded-sm">
    <a
        href={data.media_type == "video"
            ? data.url
            : hd
            ? data.hdurl
            : data.url}
        target="_blank"
        class="overflow-hidden"
    >
        <div
            class="bg-cover bg-center h-64 hover:scale-125 transition-all duration-300"
            style="background-image: url({data.media_type == 'video'
                ? data.thumbnail_url
                : hd
                ? data.hdurl
                : data.url})"
        /></a
    >

    <ColorPalette colors={extended_data.colors} compact="true" />

    <div class="px-4 py-2">
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
