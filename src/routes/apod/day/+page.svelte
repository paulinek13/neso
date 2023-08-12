<script>
    import { today } from "../../../lib/utils.js";

    let date = today().full;
</script>

<div
    class="self-center flex flex-col w-full items-center py-4 gap-4 justify-center"
>
    <div class="w-full flex justify-center px-16 lg:max-w-2xl">
        <input
            class="bg-neutral-800 px-4 py-1"
            type="date"
            min="1995-06-16"
            max={today().full}
            bind:value={date}
        />
    </div>
    <a
        href="/apod/day/{date}"
        class=" rounded-full bg-neutral-900 px-8 py-1 font-mono font-extrabold text-neutral-300"
        >GO</a
    >
</div>
