/**
 * contains date data (uses YYYY-MM-DD format)
 * @typedef {Object} Date
 * @property {string} year
 * @property {string} month
 * @property {string} day
 * @property {string} full
 */

/**
 * @returns {Date} - the first day an APOD picture was posted (1995-06-16)
 */
export function firstAPOD() {
    return ({ year: "1995", month: "06", day: "16", full: "1995-06-16" });
}

/**
 * @returns {Date} - today's date data
 */
export function today() {
    const date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (String(month).length < 2) month = "0" + month;
    if (String(day).length < 2) day = "0" + day;

    return ({ year: `${year}`, month: `${month}`, day: `${day}`, full: `${year}-${month}-${day}` });
}

export const _VERSION = "1.1";