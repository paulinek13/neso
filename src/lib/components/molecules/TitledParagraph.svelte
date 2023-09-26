<script>
    import H2 from "../atoms/H2.svelte";
    import P from "../atoms/P.svelte";

    export let title = "";
</script>

<div class="flex flex-col gap-1">
    <H2>{title}</H2>
    <P><slot /></P>
</div>
