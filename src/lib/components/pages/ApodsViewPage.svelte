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
        <div
            class="flex flex-col gap-4 h-full items-center justify-start self-center"
        >
            <div
                class="flex flex-wrap px-4 gap-x-2 justify-end w-full max-w-lg"
            >
                <Checkbox bind:checked={compact} text="compact view" />
                <Checkbox bind:checked={hd} text="high-resolution" />
            </div>

            <span class="flex-1" />

            {#if compact}
                <div
                    class="grid gap-2 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 self-center"
                    in:fade={{ duration: 600 }}
                >
                    {#each data.data as item, index}
                        <CompactApod data={item} {hd} />
                    {/each}
                </div>
            {:else}
                <div
                    class="flex flex-col gap-8 w-full lg:gap-16"
                    in:fade={{ duration: 600 }}
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
