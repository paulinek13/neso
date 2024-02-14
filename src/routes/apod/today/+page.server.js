import axios from 'axios';
import { ServerError } from '$lib/server/errors.js';
import { env } from '$env/dynamic/private';
import { today } from '$lib/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return await axios.request({
        timeout: 20000,
        signal: AbortSignal.timeout(30000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?date=${today().full}&api_key=${env.NASA_API_KEY}&thumbs=true`
    }).then((res) => {
        console.log(res.headers.get("x-ratelimit-remaining"));

        return {
            data: [res.data]
        };
    }).catch((err) => {
        console.log(err);

        if (err.code === 'ECONNABORTED') throw ServerError(504, "Gateway Timeout", "Oops! It seems like your request took too long to process and timed out.");

        throw ServerError();
    });
}