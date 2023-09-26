<script>
    import TitledParagraph from "./../../lib/components/molecules/TitledParagraph.svelte";
    import H1 from "./../../lib/components/atoms/H1.svelte";
    import ExternalLink from "./../../lib/components/atoms/ExternalLink.svelte";
    import Abbr from "./../../lib/components/atoms/Abbr.svelte";
</script>

<div class="p-4 flex flex-col gap-4 max-w-lg">
    <H1>About</H1>
    <span />
    <TitledParagraph title="Project Overview">
        This project serves as an alternative front-end to <Abbr
            title="National Aeronauticsand Space Administration">NASA</Abbr
        >'s <Abbr title="The Astronomy Picture of the Day">APOD</Abbr> API, offering
        a user-friendly interface that allows you to explore the mysteries of space
        with ease.
    </TitledParagraph>
    <TitledParagraph title="Why 'Neso'?">
        The project name was inspired by Neptune's moon of the same name. Neso
        is <ExternalLink
            url="https://solarsystem.nasa.gov/moons/neptune-moons/neso/in-depth/"
            text="another of Neptune's extremely distant irregular moons"
        />.
    </TitledParagraph>
    <TitledParagraph title="What is APOD?">
        <Abbr title="The Astronomy Picture of the Day">APOD</Abbr> stands for "Astronomy
        Picture of the Day." It is a popular initiative by <Abbr
            title="National Aeronauticsand Space Administration">NASA</Abbr
        > that showcases a different, captivating image or video related to astronomy
        or space exploration every day. Alongside each image, <Abbr
            title="The Astronomy Picture of the Day">APOD</Abbr
        > provides an informative description written by professional astronomers,
        making it a valuable resource for those interested in space and astronomy.
    </TitledParagraph>
    <TitledParagraph title="">
        <div class="flex flex-wrap gap-x-2">
            <ExternalLink
                url="https://apod.nasa.gov/apod/lib/about_apod.html"
                text="about_apod.html"
            />
            <ExternalLink
                url="https://apod.nasa.gov/apod/ap_faq.html"
                text="ap_faq.html"
            />
            <ExternalLink url="https://api.nasa.gov/" text="api.nasa.gov" />
        </div>
    </TitledParagraph>
</div>
