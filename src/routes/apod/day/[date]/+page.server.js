import { ServerError } from '$lib/server/errors.js';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const date = String(params.date);
    // todo: validate

    return await axios.request({
        timeout: 20000,
        signal: AbortSignal.timeout(30000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));

        return {
            apod: res.data
        };
    }).catch((err) => {
        if (err.code === 'ECONNABORTED') throw ServerError(504, "Gateway Timeout", "Oops! It seems like your request took too long to process and timed out.");

        // console.log(err);

        throw ServerError();
    });
}