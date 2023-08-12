/**
 * /api/nasa/apod/today
 */

import { today } from "../../../src/lib/utils.js";
import axios from "axios";

export default async (request, response) => {
    axios.request({
        timeout: 10000,
        signal: AbortSignal.timeout(10000),
        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?date=${today().full}&api_key=${process.env.NASA_API_KEY}`
    }).then((res) => {
        // console.log(res.headers.get("x-ratelimit-remaining"));
        return response.json(res.data);
    }).catch((err) => {
        return response.status(500).json({ message: "an error occurred" });
    });
}