<script>
    import axios from "axios";
    import ColorPalette from "../molecules/ColorPalette.svelte";

    export let data;
    export let extended_data = {};
    export let hd = false;
    export let media_first = true;

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
        .catch((err) => {
            console.log(err);
        });
</script>

<div
    class="flex flex-col max-w-2xl gap-1 lg:gap-4 lg:grid lg:grid-cols-2 lg:max-w-7xl"
>
    <div
        class="flex flex-col gap-1 {media_first
            ? 'lg:order-first'
            : 'lg:order-last'}"
    >
        <a
            href={data.media_type == "video"
                ? data.url
                : hd
                ? data.hdurl
                : data.url}
            target="_blank"
            class="overflow-hidden border border-stone-800 bg-black flex"
            ><img
                class="m-auto"
                src={data.media_type == "video"
                    ? data.thumbnail_url
                    : hd
                    ? data.hdurl
                    : data.url}
                alt={data.title}
            /></a
        >

        <ColorPalette colors={extended_data.colors} />
    </div>

    <div class="flex flex-col self-center gap-1">
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
