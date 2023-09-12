import axios from 'axios';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(utc);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const startDate = `${params.year}-${params.month}-01`;
    const endDate = dayjs.utc(startDate, "YYYY-MM-DD", true).endOf('month').format("YYYY-MM-DD");

    return await axios.request({
        timeout: 30000,
        signal: AbortSignal.timeout(30000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));

        return {
            year: params.year,
            month: params.month,
            data: res.data
        };
    }).catch((err) => {
        console.log(err);
        return { message: "an error occurred" };
    });
}