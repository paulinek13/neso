<script>
    import { onMount } from "svelte";
    import axios from "axios";

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
                    <svg
                        class="w-4 fill-neutral-300"
                        viewBox="-2.44 0 52.558 52.558"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="calendar"
                            d="M610.422,357.634h0v2.047l3.38-.029-.027-10.478-3.381.025.028,5.227Zm-24.761.025,0-4.981,0-3.505-3.354.026v10.482l3.379-.029Zm-.091,6.584H610.5a4.768,4.768,0,0,1-3.16-4.481,4.708,4.708,0,0,1,.759-2.578v-3.111H587.987v3.142a4.757,4.757,0,0,1-2.417,7.028Zm28.127,0h8.172v-10.2l-5.768.021v3.124a4.693,4.693,0,0,1,.753,2.569A4.766,4.766,0,0,1,613.7,364.243Zm8.2,37.488-.027-35.16H574.211v19.293h13.606a2.3,2.3,0,0,1,1.168.325,1.1,1.1,0,0,1,.126.075l.041.029.064.055a2.277,2.277,0,0,1,.9,1.815V401.73Zm-34.108-1.619V388.163l-11.928.023Zm-8.582-40.35a4.7,4.7,0,0,1,.771-2.6v-3.094h-5.767v10.17h8.158A4.771,4.771,0,0,1,579.207,359.762Z"
                            transform="translate(-574.211 -349.173)"
                        />
                    </svg>
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
