import { error } from "@sveltejs/kit";

/**
 * @param {number} code - An error code that identifies the type of error.
 * @param {string} status - The HTTP status phrase (e.g., "Bad Request," "OK").
 * @param {string} message - A human-readable error message.
 * @param {string[]} details - An array of additional error details or messages.
 */
export function ServerError(code = 500, status = "Internal Server Error", message = "An unexpected error occurred while processing your request.", details = ["Please try again later.", "If this problem persists, report an issue on GitHub."]) {
    return error(code, { message: message, status: status, details: details });
}