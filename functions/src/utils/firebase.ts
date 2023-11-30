import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getMessaging } from 'firebase-admin/messaging'

export const app = initializeApp({
	credential: applicationDefault(),
});

export const messaging = getMessaging(app);