// import { error } from '@sveltejs/kit';

export function load({ params }) {
    return {
        year: params.year
    };
    // throw error(404, 'Not found');
}