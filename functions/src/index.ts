import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import { onRequest } from "firebase-functions/v2/https";
import subscribeToNotifications from './api/subscribeToNotifications';
import trpc from './utils/trpc';

const api = trpc.router({
	subscribeToNotifications,
});

export type API = typeof api;

// ---
export const endpoint = onRequest(createHTTPHandler({ router: api }));
