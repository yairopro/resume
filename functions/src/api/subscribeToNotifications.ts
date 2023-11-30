
import { z } from "zod";
import { messaging } from "../utils/firebase";
import trpc from "../utils/trpc"


const subscribeToNotifications = trpc.procedure
	.input(z.object({ token: z.string() }))
	.mutation(async ({ input }) => {
		console.log('-- starting savePushToken');

		await messaging.subscribeToTopic([input.token], TOPIC);

		console.log('-- ending savePushToken');
	});

export default subscribeToNotifications;

// -----
export const TOPIC = 'resume';