<script>
    import Apod from "$lib/components/organisms/Apod.svelte";
    import Checkbox from "$lib/components/atoms/Checkbox.svelte";
    import CompactApod from "$lib/components/organisms/CompactApod.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import { fade } from "svelte/transition";

    export let data;

    let compact = false;
    let hd = false;
</script>

<DefaultPageTemplate>
    {#if data && data?.data}
        <div class="flex flex-col gap-4 h-full items-center">
            <div
                class="flex flex-wrap px-4 gap-x-2 justify-end w-full max-w-lg"
            >
                <Checkbox bind:checked={compact} text="compact view" />
                <Checkbox bind:checked={hd} text="high-resolution" />
            </div>

            <span class="flex-1" />

            {#if compact}
                <div class="flex flex-wrap justify-center gap-1 w-full" in:fade>
                    {#each data.data as item, index}
                        <CompactApod
                            data={item}
                            {hd}
                            only_one={data.data.length == 1 ? true : false}
                        />
                    {/each}
                </div>
            {:else}
                <div
                    class="flex flex-col gap-16 w-full items-center p-2"
                    in:fade
                >
                    {#each data.data as item, index}
                        <Apod
                            data={item}
                            {hd}
                            media_first={index % 2 == 0 ? true : false}
                        />
                    {/each}
                </div>
            {/if}

            <span class="flex-1" />
        </div>
    {:else}
        <div
            class="h-full flex flex-col items-center justify-center font-[700] tracking-wide"
        >
            An error occurred!
        </div>
    {/if}
</DefaultPageTemplate>
