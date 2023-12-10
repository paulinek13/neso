<script>
    import CalendarYearMonths from "$lib/components/molecules/CalendarYearMonths.svelte";
    import Checkbox from "$lib/components/atoms/Checkbox.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";
    import { firstAPOD, today } from "$lib/utils";

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

<DefaultPageTemplate>
    <div class="flex flex-col gap-4 h-full items-center justify-center">
        <div class="flex flex-wrap px-4 gap-x-2 justify-end w-full max-w-lg">
            <Checkbox bind:checked={reversed} text="oldest first" />
        </div>
        <div
            class="flex {reversed ? 'flex-col' : 'flex-col-reverse'} p-1 gap-1"
        >
            {#each years as year}
                <CalendarYearMonths {year} />
            {/each}
        </div>
    </div>
</DefaultPageTemplate>
