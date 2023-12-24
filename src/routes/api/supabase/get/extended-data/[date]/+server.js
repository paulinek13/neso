import { SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE } from '$env/static/private';
import { createClient } from '@supabase/supabase-js'
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const supabase = createClient(`${SUPABASE_DB_URL}`, `${SUPABASE_SERVICE_ROLE}`);

    return await supabase
        .from('apods_data')
        .select()
        .eq('id', params.date).then(({ data, error }) => {
            if (error) return json({});
            else return json((data && data.length) ? data[0] : {});
        }).catch((err) => {
            console.log(err)
            return json({});
        })
}