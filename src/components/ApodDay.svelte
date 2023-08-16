<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import CalendarIcon from "./CalendarIcon.svelte";
    import Loader from "./Loader.svelte";
    import ErrorMessage from "./ErrorMessage.svelte";

    export let data_loaded = false;
    export let loading_data = true;
    export let apod_data = {};
    export let media_first = true; // whether to place the image/video first (before text div) for large screens

    export let date = undefined;

    onMount(async () => {
        if (date) {
            data_loaded = false;
            loading_data = true;
            axios
                .get(`/api/nasa/apod/day?date=${date}`)
                .then((response) => {
                    apod_data = response.data;
                    data_loaded = true;
                })
                .catch((error) => {
                    console.log(error);
                    data_loaded = false;
                })
                .finally(() => {
                    loading_data = false;
                });
        }
    });
</script>

{#if data_loaded}
    <div class="lg:grid lg:grid-cols-2 lg:p-8 lg:gap-8">
        {#if apod_data.media_type === "image"}
            <div class="lg:hidden relative">
                <img class="m-auto" src={apod_data.url} alt={apod_data.title} />
                <a
                    href={apod_data.hdurl}
                    target="_blank"
                    class="absolute top-0 w-full h-full hover:bg-neutral-700 hover:bg-opacity-10"
                />
            </div>
            <div
                class="hidden lg:flex lg:justify-end {media_first
                    ? 'order-first'
                    : 'order-last'}"
            >
                <div
                    class="flex-1 bg-center bg-contain bg-no-repeat w-full max-w-2xl relative"
                    style="background-image: url({apod_data.url})"
                >
                    <a
                        href={apod_data.hdurl}
                        target="_blank"
                        class="absolute top-0 w-full h-full hover:bg-neutral-700 hover:bg-opacity-10"
                    />
                </div>
            </div>
        {:else}
            <div class="h-96 flex self-center">
                <iframe
                    class="m-auto h-full w-full"
                    src={apod_data.url}
                    title={apod_data.title}
                />
            </div>
        {/if}
        <div
            class="flex flex-col gap-4 p-4 sm:p-8 md:p-16 lg:justify-center lg:p-4 lg:max-w-2xl {media_first
                ? 'order-last'
                : 'order-first'}"
        >
            <div class="text-neutral-300">
                <span
                    class="text-xs flex justify-center gap-2 pb-1 tracking-widest"
                >
                    <CalendarIcon />
                    <a href="/apod/day/{apod_data.date}">{apod_data.date}</a
                    ></span
                >
                <h1
                    class="break-words text-center font-sans text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-neutral-400 to-neutral-200"
                >
                    {apod_data.title}
                </h1>
                {#if apod_data.copyright}
                    <h2 class="text-center text-sm font-light pt-1">
                        {apod_data.copyright}
                    </h2>
                {/if}
            </div>
            <p class="text-justify">{apod_data.explanation}</p>
        </div>
    </div>
{:else if !data_loaded && loading_data}
    <Loader />
{:else}
    <ErrorMessage />
{/if}
