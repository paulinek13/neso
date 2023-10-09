<script>
    export let colors = [];
    export let compact = false;
</script>

{#if colors.length}
    <div
        class="grid bg-black {compact
            ? 'border-t border-b border-stone-900'
            : 'border border-stone-800'}"
        style="grid-template-columns: repeat({colors.length}, minmax(0, 1fr));"
    >
        {#each colors as color}<div
                style="background-color: {color};"
                class={compact ? "h-4" : "h-8"}
            />
        {/each}
    </div>
{/if}
