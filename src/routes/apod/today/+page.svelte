<script>
    import Apod from "$lib/components/organisms/Apod.svelte";

    export let data;
</script>

<div class="p-4 flex">
    <Apod data={data.apod} />
</div>
