import { ServerError } from '$lib/server/errors.js';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const count = Number(params.count);
    if (!((Number.isInteger(count)) && (count > 0) && (count <= 100))) throw ServerError(400, "Bad Request", "Invalid `count` param", []);

    return await axios.request({
        timeout: 50000,
        signal: AbortSignal.timeout(60000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?count=${count}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));

        return {
            count: count,
            data: res.data
        };
    }).catch((err) => {
        if (err.code === 'ECONNABORTED') throw ServerError(504, "Gateway Timeout", "Oops! It seems like your request took too long to process and timed out.");

        // console.log(err);

        throw ServerError();
    });
}