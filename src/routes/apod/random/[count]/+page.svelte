<script>
    import ApodDay from "../../../../components/ApodDay.svelte";
    import { onMount } from "svelte";
    import axios from "axios";

    export let data;

    let data_loaded = false;
    let loading_data = true;

    let apod_data = {};

    onMount(async () => {
        data_loaded = false;
        loading_data = true;
        axios
            .get(`/api/nasa/apod/random?count=${data.count}`)
            .then((response) => {
                apod_data = response.data;
                console.log(apod_data);
                data_loaded = true;
            })
            .catch((error) => {
                console.log(error);
                data_loaded = false;
            })
            .finally(() => {
                loading_data = false;
            });
    });
</script>

{#if data_loaded}
    <div class="flex flex-col py-16 gap-16 lg:py-32 lg:gap-32">
        {#each apod_data as apod, index}
            <ApodDay
                data_loaded={true}
                loading_data={false}
                apod_data={apod}
                media_first={index % 2 == 0 ? true : false}
            />
            {#if index < data.count - 1}
                <div class="hidden lg:block lg:border lg:border-neutral-800" />
            {/if}
        {/each}
    </div>
{:else if !data_loaded && loading_data}
    <div
        class="self-center animate-spin inline-block w-32 h-32 border-4 border-current border-t-transparent rounded-full text-blue-600 my-20"
        role="status"
        aria-label="loading"
    />
{:else}
    <div class="self-center px-8 py-4 border-l-4 border-orange-600">
        <p>
            something went wrong <br /> if this error persists, please
            <a
                class="underline text-orange-600"
                href="https://github.com/paulinek13/neso/issues"
                >report an issue</a
            >
        </p>
    </div>
{/if}
