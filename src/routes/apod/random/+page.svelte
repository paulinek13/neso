<script>
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import GoLink from "$lib/components/atoms/GoLink.svelte";
    import { beforeNavigate } from "$app/navigation";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    let count = 10;

    beforeNavigate(() => {
        if (browser && localStorage) {
            localStorage.setItem("neso-apod-random-count", count);
        }
    });

    onMount(() => {
        if (localStorage) {
            let last_count = Number(
                localStorage.getItem("neso-apod-random-count"),
            );

            if (
                Number.isInteger(last_count) &&
                last_count > 0 &&
                last_count <= 100
            )
                count = last_count;
            else count = 10;
        }
    });
</script>

<DefaultPageTemplate>
    <div class="h-full flex flex-col items-center justify-center gap-4">
        <span class="text-2xl">{count}</span>
        <div class="w-full flex justify-center max-w-sm px-4">
            <input
                type="range"
                class="slider w-full h-1 rounded-lg appearance-none cursor-pointer bg-stone-900 accent-orange-600"
                bind:value={count}
                min="1"
                max="100"
            />
        </div>

        <GoLink link="/apod/random/{count}" />
    </div>
</DefaultPageTemplate>
