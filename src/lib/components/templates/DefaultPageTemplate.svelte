<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 300 }} class="mt-2 mb-8 mx-4 h-full flex flex-col">
    <slot />
</div>
