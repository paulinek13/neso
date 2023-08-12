// import { error } from '@sveltejs/kit';

export function load({ params }) {
    return {
        date: params.date
    };
    // throw error(404, 'Not found');
}