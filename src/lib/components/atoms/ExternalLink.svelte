<script>
    export let url = "https://neso.vercel.app/";
    export let text = "link";
</script>

<a
    target="_blank"
    href={url}
    title={text}
    class="underline underline-offset-4 decoration-orange-700 text-stone-300 hover:text-orange-300"
    >{text}<span class="text-orange-500">➚</span></a
>
