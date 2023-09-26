import type { LayoutLoad } from './$types';
import "../app.css";

export const prerender = true;

export const load = (async () => {
    return {};
}) satisfies LayoutLoad;