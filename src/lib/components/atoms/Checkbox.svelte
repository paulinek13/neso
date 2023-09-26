<script>
    export let checked = false;
    export let text = "checkbox";
</script>

<button
    class="hover:bg-stone-500 hover:bg-opacity-10 rounded-sm flex items-center px-2 gap-2 py-1"
    aria-checked={checked}
    role="checkbox"
    on:click={() => {
        checked = !checked;
    }}
    ><span
        class="w-3 aspect-square border border-stone-500 {checked
            ? 'bg-stone-400'
            : 'bg-transparent'}"
    />
    <span class="text-stone-300 font-[300]">{text}</span></button
>
