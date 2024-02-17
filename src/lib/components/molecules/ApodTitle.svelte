<script>
    export let data;
    export let small = false;
</script>

<a
    href="/apod/day/{data?.date}"
    target="_blank"
    class="block text-stone-300 hover:text-blue-500 tracking-wide {small
        ? 'text-base font-[600] leading-tight'
        : 'text-2xl font-[800] py-1'}"
>
    {data?.title}
</a>
