<script>
    import H2 from "$lib/components/atoms/H2.svelte";
    import P from "$lib/components/atoms/P.svelte";

    export let title = "";
</script>

<div class="flex flex-col gap-1">
    <H2>{title}</H2>
    <P><slot /></P>
</div>
