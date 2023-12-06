<script>
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import GoLink from "$lib/components/atoms/GoLink.svelte";
    import { beforeNavigate } from "$app/navigation";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { today } from "$lib/utils.js";

    let date = today().full;

    beforeNavigate(() => {
        if (browser && localStorage) {
            localStorage.setItem("neso-apod-last-selected-day", date);
        }
    });

    onMount(() => {
        if (localStorage) {
            date =
                localStorage.getItem("neso-apod-last-selected-day") ??
                today().full;
        }
    });
</script>

<DefaultPageTemplate>
    <div class="h-full flex flex-col items-center justify-center gap-4">
        <div class="flex justify-center max-w-sm px-4 text-xl">
            <input
                class="bg-stone-800 px-4 py-1"
                type="date"
                min="1995-06-16"
                max={today().full}
                bind:value={date}
            />
        </div>

        <GoLink link="/apod/day/{date}" />
    </div>
</DefaultPageTemplate>
