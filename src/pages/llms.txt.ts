import type { APIRoute } from "astro";
import { summary } from "../lib/plain";

export const GET: APIRoute = () => new Response(summary(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
