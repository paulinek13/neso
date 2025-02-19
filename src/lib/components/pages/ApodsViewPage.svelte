<script>
    import Apod from "$lib/components/organisms/Apod.svelte";
    import Checkbox from "$lib/components/atoms/Checkbox.svelte";
    import CompactApod from "$lib/components/organisms/CompactApod.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import { beforeNavigate } from "$app/navigation";
    import { fade } from "svelte/transition";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    export let data;
    export let view = "default";

    let compact = false;
    let hd = false;

    beforeNavigate(() => {
        if (browser && localStorage) {
            localStorage.setItem("neso-apod-view-type", view);
            localStorage.setItem("neso-apod-hd-link", hd);
        }
    });

    onMount(() => {
        if (localStorage) {
            view = localStorage.getItem("neso-apod-view-type") ?? "default";
            hd = localStorage.getItem("neso-apod-hd-link") ?? false;
        }
    });

    data?.data.forEach(async (apod_info, index) => {
        await fetch(`/api/supabase/get/extended-data/${apod_info.date}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(async (res) => {
            let _extended_data = await res.json();
            data.data[index] = {
                ...data.data[index],
                _extended: _extended_data,
            };
        });
    });
</script>

<DefaultPageTemplate>
    {#if data && data?.data}
        <div class="flex flex-col gap-4 h-full items-center px-2">
            <div
                class="flex flex-wrap px-4 gap-x-2 justify-end w-full max-w-lg"
            >
                <Checkbox bind:checked={hd} text="high-resolution" />

                <div
                    class="bg-black border border-stone-900 hover:cursor-pointer pr-2"
                >
                    <select
                        class="outline-none bg-black text-stone-300 font-[300] hover:cursor-pointer py-1 px-2"
                        bind:value={view}
                    >
                        <option value="full">full</option>
                        <option value="default">default</option>
                        <option value="compact">compact</option>
                    </select>
                </div>
            </div>

            <span class="flex-1" />

            {#if view === "compact"}
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
                {#key view}
                    <div class="flex flex-col gap-16" in:fade>
                        {#each data.data as item, index}
                            <Apod
                                data={item}
                                {hd}
                                media_first={view === "full" || index % 2 == 0
                                    ? true
                                    : false}
                                full={view === "full"}
                            />
                        {/each}
                    </div>
                {/key}
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
