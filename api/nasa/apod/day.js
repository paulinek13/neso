/**
 * /api/nasa/apod/day
 */

import axios from "axios";

export default async (request, response) => {
    if (!request.query.date) return response.status(500).json({ message: "invalid query" });

    axios.request({
        timeout: 10000,
        signal: AbortSignal.timeout(10000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?date=${request.query.date}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));
        return response.json(res.data);
    }).catch((err) => {
        // console.log(err);
        return response.status(500).json({ message: "an error occurred" });
    });
}