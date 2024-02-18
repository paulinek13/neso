<script>
    export let data;
    export let hd = false;
    export let fullImg = false;

    let showAsImg =
        !data?.thumbnail_url && !data?.hdurl && data?.media_type !== "image"
            ? false
            : true;

    $: imgUrl = data?.media_type === "video" ? data?.thumbnail_url : data?.url;
    $: linkUrl =
        data?.media_type === "video" ? data?.url : hd ? data?.hdurl : data?.url;
</script>

{#if showAsImg}
    {#if fullImg}
        <a
            class="border border-stone-900 overflow-hidden bg-black"
            href={linkUrl}
            target="_blank"
        >
            <img
                class="hover:scale-125 transition-all duration-300 m-auto"
                src={imgUrl}
                alt=""
            />
        </a>
    {:else}
        <div
            class="flex-1 flex flex-col justify-center border border-stone-900"
        >
            <a
                href={linkUrl}
                target="_blank"
                class="block flex-1 overflow-hidden"
            >
                <div
                    class="bg-cover bg-center hover:scale-125 transition-all duration-300 h-full min-h-[16rem]"
                    style="background-image: url({imgUrl})"
                /></a
            >
        </div>
    {/if}
{:else}
    <a
        target="_blank"
        href={data?.url ?? "/"}
        class="border border-stone-900 h-full min-h-[16rem] flex flex-col justify-center text-stone-400 text-sm"
    >
        <div
            class="text-center p-4 bg-black border-t border-b border-stone-900"
        >
            ➚ <br /> Non-image APOD <br /> Open in new tab
        </div>
    </a>
{/if}
