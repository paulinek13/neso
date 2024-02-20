<script>
    import { _VERSION } from "$lib/utils.js";
</script>

<div
    class="min-w-[300px] bg-black border-t border-stone-950 text-stone-400 text-xs px-4 py-8 flex justify-center"
>
    <div class="flex flex-col gap-1">
        <div class="flex gap-1 justify-center">
            <a
                href="https://github.com/paulinek13/neso"
                target="_blank"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-stone-900 text-stone-300 bg-stone-950 hover:outline hover:outline-1 hover:outline-stone-700"
                >REPO ➚</a
            >
            <a
                href="https://github.com/nasa/apod-api"
                target="_blank"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-blue-950 text-stone-300 bg-stone-950 hover:outline hover:outline-1 hover:outline-blue-800"
                >APOD API ➚</a
            >
            <a
                href="/about"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-orange-950 text-stone-300 bg-stone-950 hover:outline hover:outline-1 hover:outline-orange-800"
                >ABOUT</a
            >
        </div>
        <a
            href="https://github.com/paulinek13/neso"
            target="_blank"
            class="block px-3 py-[1px] font-[500] text-center text-[0.7rem] tracking-widest text-stone-300 hover:bg-stone-900 hover:text-stone-200"
            >v{_VERSION}</a
        >
    </div>
</div>
