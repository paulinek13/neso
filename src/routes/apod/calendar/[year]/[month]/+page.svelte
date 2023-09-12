<script>
    import ApodDay from "../../../../../components/ApodDay.svelte";

    export let data;
</script>

<div class="flex flex-col w-full items-center justify-center">
    <h1
        class="text-2xl pt-8 text-center w-full tracking-wider flex gap-2 items-center justify-center"
    >
        <span class="font-thin text-orange-600">{data.month}</span>
        <span class="font-extrabold text-stone-300">{data.year}</span>
    </h1>
    <div class="flex flex-wrap gap-4 justify-center">
        {#each data.data as item, index}
            <ApodDay
                data_loaded={true}
                loading_data={false}
                apod_data={item}
                media_first={index % 2 == 0 ? true : false}
            />
        {/each}
    </div>
</div>
