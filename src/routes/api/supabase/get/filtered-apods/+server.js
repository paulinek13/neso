import { SUPABASE_DB_URL, SUPABASE_SERVICE_ROLE } from '$env/static/private';
import { createClient } from '@supabase/supabase-js'
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const supabase = createClient(`${SUPABASE_DB_URL}`, `${SUPABASE_SERVICE_ROLE}`);

    const _params = {
        colors: url.searchParams.get('colors')
    };

    if (_params.colors) {
        const _colors = _params.colors.split(',');

        if (_colors.length > 4) return json({ error: "The maximum number of colors is 4" }, { status: 400 });

        const promise = supabase
            .from('apods_data')
            .select()
            .contains('filter_palette', _colors).limit(32);

        return await promise.then(({ data }) => {
            return json({
                apods: data,
                _params: { colors: _colors }
            });
        });
    }
    else return json({ error: "No filters were provided" }, { status: 400 });
};