<script>
    export let data;
</script>

<p class="font-[300] pr-2 {!data?.explanation ? 'text-stone-500 italic' : ''}">
    {data?.explanation ?? "No explanation"}
</p>
