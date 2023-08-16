<script>
    import GoLink from "../../../components/GoLink.svelte";

    let count = 10;
</script>

<div
    class="self-center flex flex-col w-full items-center py-4 gap-4 justify-center"
>
    <span class="text-2xl">{count}</span>
    <div class="w-full flex justify-center px-16 lg:max-w-2xl">
        <input
            type="range"
            class="slider w-full h-1 rounded-lg appearance-none cursor-pointer bg-neutral-900 accent-orange-600"
            bind:value={count}
            min="1"
            max="100"
        />
    </div>

    <GoLink link="/apod/random/{count}" />
</div>
