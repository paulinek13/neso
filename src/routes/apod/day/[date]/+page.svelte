<script>
    import ApodDay from "../../../../components/ApodDay.svelte";
    import { onMount } from "svelte";
    import axios from "axios";

    export let data;

    let data_loaded = false;
    let loading_data = true;

    let apod_data = {};

    onMount(async () => {
        data_loaded = false;
        loading_data = true;
        axios
            .get(`/api/nasa/apod/day?date=${data.date}`)
            .then((response) => {
                apod_data = response.data;
                data_loaded = true;
            })
            .catch((error) => {
                console.log(error);
                data_loaded = false;
            })
            .finally(() => {
                loading_data = false;
            });
    });
</script>

<ApodDay {data_loaded} {loading_data} {apod_data} />
