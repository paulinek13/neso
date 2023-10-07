<script>
    import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center gap-4 font-mono p-6">
    <div class="flex flex-col items-center">
        <h1 class="font-[900] text-7xl text-orange-600">
            {$page.status}
        </h1>
        <h2
            class="text-sm text-orange-600 font-[700] tracking-wide px-4 py-1 rounded-sm"
        >
            {$page.error.status}
        </h2>
    </div>
    <span class="first-letter:capitalize text-orange-300 text-center"
        >{$page.error.message}</span
    >

    <div class="text-xs max-w-xs text-center">
        {#each $page.error.details as detail}
            <span>{detail}</span>
            <span />
        {/each}
    </div>
</div>
