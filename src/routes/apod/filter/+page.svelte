<script>
    import Button from "$lib/components/atoms/Button.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import { FILTER_COLORS } from "$lib/colors.js";
    import { fade } from "svelte/transition";
    import { page } from "$app/stores";
    import { replaceState } from "$app/navigation";

    let value = $page.url.searchParams.get("colors")?.split(",") ?? [];
    let promise = searchAPODs();

    async function searchAPODs() {
        const res = await fetch(
            `/api/supabase/get/filtered-apods?colors=${value.join(",")}`,
        );
        const data = await res.json();

        if (res.ok) return data;
        else throw data;
    }
</script>

<DefaultPageTemplate>
    <div class="flex flex-col gap-2 items-center">
        <div class="text-sm py-4 px-2 mb-4 max-w-xl">
            Please be aware it's only a prototype with limited data and
            capabilities, and is still under development.
        </div>
        <div class="flex flex-col gap-2 w-full max-w-xl">
            <select
                class="appearance-none block w-full p-2 text-sm bg-stone-900 border border-stone-800 focus:outline-none focus:ring-0 focus:border-stone-700 rounded-none"
                multiple
                bind:value
                size="8"
                required
                name="colors"
                on:change={() => {
                    $page.url.searchParams.set("colors", value.join(","));
                    replaceState($page.url);
                }}
            >
                {#each FILTER_COLORS as _filter_color}
                    <option
                        class="block text-transparent"
                        style="background-color: {_filter_color};"
                        value={_filter_color.slice(1)}
                        >{_filter_color}
                    </option>
                {/each}
            </select>
            <Button
                on:click={() => {
                    promise = searchAPODs();
                }}>search</Button
            >
        </div>

        {#await promise}
            <div class="text-center px-4 py-16 text-blue-500">...searching</div>
        {:then data}
            <div class="flex w-full max-w-xl">
                {#each data._params.colors as param_color}
                    <div
                        class="h-8 flex-1"
                        style="background-color: #{param_color};"
                    ></div>
                {/each}
            </div>
            <div class="w-full">
                <div
                    class="columns-[10rem] max-w-screen-2xl md:columns-3xs [&>div:not(:first-child)]:mt-2 m-auto"
                    in:fade
                >
                    {#each data.apods as apod_info}
                        <div
                            class="relative overflow-hidden bg-no-repeat bg-cover border border-stone-900"
                        >
                            <a
                                class="grid content-center absolute cursor-pointer bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden transition duration-100 ease-in-out opacity-0 hover:opacity-80 bg-stone-800 bg-opacity-80 backdrop-blur-sm"
                                href="/apod/day/{apod_info.id}"
                                target="_blank"
                            >
                                <span
                                    class="m-auto text-stone-100 tracking-widest [text-shadow:1px_1px_1px_var(--tw-shadow-color)] shadow-orange-600"
                                    >➚ {apod_info.id}</span
                                >
                            </a>
                            <img
                                class="w-full"
                                src={apod_info.url}
                                alt={apod_info.id}
                            />
                        </div>
                    {/each}
                </div>
            </div>
        {:catch error}
            <div class="text-center px-4 py-16 text-orange-500">
                {error.error}
            </div>
        {/await}
    </div>
</DefaultPageTemplate>
