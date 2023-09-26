<script>
    import GoLink from "./../../../lib/components/atoms/GoLink.svelte";
    import { today } from "../../../lib/utils.js";

    let date = today().full;
</script>

<div class="flex flex-col items-center py-4 gap-4 justify-center">
    <div class="w-full flex justify-center px-16 lg:max-w-2xl text-xl">
        <input
            class="w-full bg-stone-800 px-4 py-1"
            type="date"
            min="1995-06-16"
            max={today().full}
            bind:value={date}
        />
    </div>

    <GoLink link="/apod/day/{date}" />
</div>
