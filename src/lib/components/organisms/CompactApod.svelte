<script>
    export let data;
    export let hd = false;
</script>

<div class="flex flex-col w-full max-w-xs border border-stone-800 rounded-sm">
    <a
        href={hd ? data.hdurl : data.url}
        target="_blank"
        class="overflow-hidden"
    >
        <div
            class="bg-cover bg-center h-64 hover:scale-125 transition-all duration-300"
            style="background-image: url({hd ? data.hdurl : data.url})"
        /></a
    >

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
