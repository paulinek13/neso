<script>
    import { fade } from "svelte/transition";
</script>

<div
    in:fade={{ duration: 300 }}
    class="mt-2 mb-8 mx-2 sm:mx-4 2xl:mx-8 h-full flex flex-col"
>
    <slot />
</div>
