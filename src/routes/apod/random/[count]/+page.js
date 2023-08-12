// import { error } from '@sveltejs/kit';

export function load({ params }) {
    return {
        count: params.count
    };
    // throw error(404, 'Not found');
}