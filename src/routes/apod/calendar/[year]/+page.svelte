<script>
    import CalendarYearMonths from "$lib/components/molecules/CalendarYearMonths.svelte";
    import DefaultPageTemplate from "$lib/components/templates/DefaultPageTemplate.svelte";

    export let data;
</script>

<DefaultPageTemplate>
    <div
        class="flex flex-col w-full justify-center h-full self-center max-w-xs"
    >
        <CalendarYearMonths year={Number(data.year)} compact={false} />
    </div>
</DefaultPageTemplate>
