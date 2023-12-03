<script>
    import { _VERSION } from "$lib/utils.js";
</script>

<div
    class="min-w-[300px] bg-stone-900 bg-opacity-50 border-t border-stone-800 text-stone-400 text-xs p-4 flex justify-center"
>
    <div class="flex flex-col gap-1">
        <div class="flex gap-1 justify-center">
            <a
                href="https://github.com/paulinek13/neso"
                target="_blank"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-stone-700 text-stone-300 bg-black hover:outline hover:outline-1 hover:outline-stone-700"
                >REPO ➚</a
            >
            <a
                href="https://github.com/nasa/apod-api"
                target="_blank"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-stone-700 text-blue-300 bg-black hover:outline hover:outline-1 hover:outline-blue-700"
                >APOD API ➚</a
            >
            <a
                href="/about"
                class="block px-3 py-[5px] font-[500] tracking-widest border border-stone-700 text-orange-300 bg-black hover:outline hover:outline-1 hover:outline-orange-700"
                >ABOUT</a
            >
        </div>
        <a
            href="https://github.com/paulinek13/neso"
            target="_blank"
            class="block px-3 py-[1px] font-[500] text-center text-[0.7rem] font-mono tracking-widest border border-stone-800 text-stone-300 hover:border-stone-700 hover:text-stone-200"
            >v{_VERSION}</a
        >
    </div>
</div>
