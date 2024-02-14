import axios from 'axios';
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { env } from '$env/dynamic/private';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const startDate = ((params.year === "1995") && (params.month === "06")) ? "1995-06-16" : `${params.year}-${params.month}-01`;
    const endDate = dayjs.utc(startDate, "YYYY-MM-DD", true).endOf('month').format("YYYY-MM-DD");

    const max_today = dayjs.utc(startDate, "YYYY-MM-DD", true).endOf('month').isAfter(dayjs.utc(), '') ? true : false;

    return await axios.request({
        timeout: 30000,
        signal: AbortSignal.timeout(30000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${max_today ? dayjs.utc().format("YYYY-MM-DD") : endDate}&api_key=${env.NASA_API_KEY}&thumbs=true`
    }).then((res) => {
        console.log(res.headers.get("x-ratelimit-remaining"));

        return {
            year: params.year,
            month: params.month,
            data: res.data
        };
    }).catch((err) => {
        console.log(err);

        if (err.code === 'ECONNABORTED') throw ServerError(504, "Gateway Timeout", "Oops! It seems like your request took too long to process and timed out.");

        throw ServerError();
    });
}