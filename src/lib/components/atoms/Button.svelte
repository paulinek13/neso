<script>
    export let primary = false;
    export let link = "";
</script>

{#if link}
    <a
        class="px-8 py-2 rounded-sm text-center tracking-wide hover:bg-opacity-80 relative {primary
            ? 'text-stone-200 bg-orange-700 font-[700]'
            : 'text-stone-300 bg-stone-900 font-[300]'}"
        href={link}
    >
        <slot />
    </a>
{:else}
    <button
        class="px-8 py-2 rounded-sm text-center tracking-wide hover:bg-opacity-80 relative {primary
            ? 'text-stone-200 bg-orange-700 font-[700]'
            : 'text-stone-300 bg-stone-900 font-[300]'}"
        on:click
    >
        <slot />
    </button>
{/if}
