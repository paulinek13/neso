<script>
    import Apod from "$lib/components/organisms/Apod.svelte";

    export let data;
</script>

<div class="p-4">
    <Apod data={data.apod} />
</div>
