/**
 * /api/nasa/apod/random
 */

import axios from "axios";

const isCountValid = (count) => {
    if (!Number.isInteger(Number(count))) return false;
    if ((count > 0) && (count <= 100)) return true;
    return false;
}

export default async (request, response) => {
    if (!request.query.count) return response.status(500).json({ message: "invalid query" });
    if (!isCountValid(request.query.count)) return response.status(500).json({ message: "invalid count param" });

    axios.request({
        timeout: 40000,
        signal: AbortSignal.timeout(40000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?count=${request.query.count}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));
        return response.json(res.data);
    }).catch((err) => {
        // console.log(err);
        return response.status(500).json({ message: "an error occurred" });
    });
}