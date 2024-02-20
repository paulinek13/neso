<script>
    export let data;
    export let small = false;
</script>

<a
    class="block font-[300] text-stone-400 hover:text-orange-500 leading-tight {small
        ? 'text-sm'
        : 'text-base'}"
    href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply"
    target="_blank">{data?.copyright ?? "NASA"}</a
>
