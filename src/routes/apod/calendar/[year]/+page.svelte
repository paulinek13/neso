<script>
    import CalendarYear from "../../../../components/CalendarYear.svelte";

    export let data;
</script>

<div class="flex flex-col w-full items-center justify-center p-1">
    <CalendarYear year={Number(data.year)} compact={false} />
</div>
