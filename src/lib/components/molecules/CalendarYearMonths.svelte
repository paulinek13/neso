<script>
    import { firstAPOD, today } from "../../utils";

    export let year;

    export let compact = true;

    const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];

    const months_names = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const months_abbr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    let start_year = parseInt(firstAPOD().year);
    let start_month = parseInt(firstAPOD().month);
    let current_year = parseInt(today().year);
    let current_month = parseInt(today().month);
</script>

{#if compact}
    <div
        class="flex flex-row even:bg-stone-950 odd:bg-[#100E0D] border border-stone-800 rounded-sm font-mono"
    >
        <a
            class="tracking-wide font-bold text-center flex items-center px-2 border-r border-stone-800 text-stone-300 hover:text-stone-50"
            href="/apod/calendar/{year}">{year}</a
        >

        <div
            class="grid max-[360px]:grid-cols-4 grid-cols-6 sm:grid-cols-12 flex-1 auto-cols-max content-center text-center"
        >
            {#each months as month, i}
                {#if !((year === start_year && month < start_month) || (year === current_year && month > current_month))}
                    <a
                        class="text-center hover:text-stone-50 hover:bg-stone-800 font-normal py-[1px] px-2 odd:text-stone-400 even:text-[#908A85]"
                        href="/apod/calendar/{year}/{month}">{months_abbr[i]}</a
                    >
                {:else}
                    <span />
                {/if}
            {/each}
        </div>
    </div>
{:else}
    <div class="flex flex-col items-stretch border border-stone-800">
        <a
            class="tracking-widest font-bold text-center text-stone-300 hover:text-stone-50 px-8 py-2 bg-[#100E0D] text-lg border-b border-stone-800"
            href="/apod/calendar/{year}">{year}</a
        >
        <div class="flex flex-col gap-1 w-full py-2 bg-[#100E0D]">
            {#each months as month, i}
                {#if !((year === start_year && month < start_month) || (year === current_year && month > current_month))}
                    <a
                        class="hover:text-stone-50 hover:bg-stone-800 font-normal odd:text-stone-400 even:text-[#908A85] px-16 py-2"
                        href="/apod/calendar/{year}/{month}"
                        >{month}. {months_names[i]}</a
                    >
                {:else}
                    <span class="hidden" />
                {/if}
            {/each}
        </div>
    </div>
{/if}
