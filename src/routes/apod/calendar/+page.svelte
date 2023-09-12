<script>
    import CalendarYear from "../../../components/CalendarYear.svelte";
    import { firstAPOD, today } from "../../../lib/utils";
    import { navigating } from "$app/stores";
    import Loader from "../../../components/Loader.svelte";

    function generateYears() {
        let start = parseInt(firstAPOD().year);
        let end = parseInt(today().year);
        let length = end - start + 1;

        const result = new Array(length);
        for (let index = 0; index < length; index++) result[index] = start++;
        return result;
    }

    let years = generateYears();
    let reversed = true;
</script>

{#if $navigating}
    <Loader />
{:else}
    <div class="self-center flex flex-col max-w-2xl px-1 py-2">
        <div class="p-1 flex justify-end">
            <label
                class="flex items-center gap-2 accent-orange-500 text-orange-600 font-normal"
            >
                <input type="checkbox" bind:checked={reversed} />
                <span>oldest first</span>
            </label>
        </div>

        <div
            class="flex flex-col {reversed
                ? 'flex-col'
                : 'flex-col-reverse'} p-1 gap-1"
        >
            {#each years as year}
                <CalendarYear {year} />
            {/each}
        </div>
    </div>
{/if}
