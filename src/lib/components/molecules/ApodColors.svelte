<script>
    import { fade } from "svelte/transition";

    export let hex_palette = [];
    export let filter_palette = [];
</script>

{#if hex_palette && filter_palette}
    <div in:fade class="flex border-t border-stone-900 flex-wrap">
        {#each hex_palette as color, index}
            <div
                class="flex-1 text-center min-w-12 overflow-hidden"
                style="background-color: #{color};"
            >
                <a
                    href="/apod/filter?colors={filter_palette[index]}"
                    target="_blank"
                    class="color-link block opacity-0 hover:opacity-100 text-[10px] sm:text-xs py-1 md:text-sm"
                >
                    {color}
                </a>
            </div>
        {/each}
    </div>
{/if}

<style>
    .color-link {
        color: #0c0a09;
        font-weight: 900;
        text-shadow:
            1px 1px 0 #e7e5e4,
            -1px -1px 0 #e7e5e4,
            1px -1px 0 #e7e5e4,
            -1px 1px 0 #e7e5e4;
    }
</style>