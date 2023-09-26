<script>
    import CalendarYearMonths from "./../../../../lib/components/molecules/CalendarYearMonths.svelte";

    export let data;
</script>

<div class="flex flex-col w-full items-center justify-center p-1">
    <CalendarYearMonths year={Number(data.year)} compact={false} />
</div>
