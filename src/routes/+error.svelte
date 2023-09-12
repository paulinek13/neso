<script>
    import { page } from "$app/stores";
</script>

<div class="w-full flex flex-col justify-center items-center">
    <h1 class="font-extrabold font-mono text-6xl text-orange-600">
        {$page.status}
    </h1>
    <h1 class="lowercase">{$page.error.message}</h1>
</div>
