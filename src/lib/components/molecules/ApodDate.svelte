<script>
    export let data;
    export let small = false;
</script>

<a
    href="/apod/day/{data.date}"
    target="_blank"
    class="block hover:text-blue-400 tracking-widest {small
        ? 'text-xs'
        : 'text-base p-2 text-center border border-stone-900 bg-stone-950'}"
>
    {data.date}
</a>
