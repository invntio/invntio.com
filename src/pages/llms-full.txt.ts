import type { APIRoute } from "astro";
import { full } from "../lib/plain";

export const GET: APIRoute = async () => new Response(await full(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
