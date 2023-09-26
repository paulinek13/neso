<script>
    import CalendarYearMonths from "./../../../lib/components/molecules/CalendarYearMonths.svelte";
    import Checkbox from "./../../../lib/components/atoms/Checkbox.svelte";
    import { firstAPOD, today } from "../../../lib/utils";

    function generateYears() {
        let start = parseInt(firstAPOD().year);
        let end = parseInt(today().year);
        let length = end - start + 1;

        const result = new Array(length);
        for (let index = 0; index < length; index++) result[index] = start++;
        return result;
    }

    let years = generateYears();
    let reversed = false;
</script>

<div class="flex flex-col px-1 py-2 max-[360px]:w-full">
    <div class="p-1 flex justify-end">
        <Checkbox bind:checked={reversed} text="oldest first" />
    </div>
    <div class="flex {reversed ? 'flex-col' : 'flex-col-reverse'} p-1 gap-1">
        {#each years as year}
            <CalendarYearMonths {year} />
        {/each}
    </div>
</div>
