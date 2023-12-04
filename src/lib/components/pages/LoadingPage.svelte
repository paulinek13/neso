<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade class="m-2 h-full flex flex-col items-center justify-center">
    <div
        class="animate-spin p-4 aspect-square border-2 border-current border-t-transparent rounded-full text-orange-700 flex"
        role="status"
        aria-label="loading"
    />
</div>
