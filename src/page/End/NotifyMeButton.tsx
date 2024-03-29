// import { getApp } from "firebase/app";
// import { getMessaging, getToken, isSupported } from "firebase/messaging";
// import { useEffect, useState } from "react";
// import { Pressable, PressableProps, StyleSheet } from "react-native";
// import api from "../../api";
// import AppText from "../../component/Text";
// import { useSelectText } from "../../hook/useLang";


// export default function NotifyMeButton({ ...props }: PressableProps) {
// 	const [supported, setSupported] = useState<boolean>(false);
// 	useEffect(() => {
// 		isSupported().then(setSupported);
// 	}, []);

// 	const selectText = useSelectText();

// 	const [subscription, setSubscribing] = useState<"sending" | "done">();
// 	if (!subscription)
// 		props.onPress = () => {
// 			setSubscribing("sending");
// 			subscribe()
// 				.then(() => setSubscribing("done"))
// 				.catch(() => setSubscribing(undefined))
// 		};
// 	// @ts-ignore
// 	props.style = StyleSheet.compose(styles.container, props.style);

// 	return !supported ? null : (
// 		<Pressable {...props}>
// 			{GRADIENT_BACKGROUND}

// 			<AppText style={styles.text}>
// 				{
// 					subscription == "sending" ? `Subscribing...`
// 						: subscription == "done" ? `✨ Subscribed`
// 							: selectText({
// 								en: "Notify me on updates",
// 								fr: "Me notifier des changements",
// 							})
// 				}
// 			</AppText>
// 		</Pressable>
// 	);
// }


// async function subscribe() {
// 	const messaging = getMessaging(getApp());

// 	const token = await getToken(messaging, {
// 		vapidKey: "BJV89gRYMKj7qUPy72WA0aIq_AihixKO0rrzXf3-Z-vnidlPdFYvGXGtQ9_gXWHCQjPj4A9Fgwyro020kwEudbI",
// 	});

// 	await api.subscribeToNotifications.mutate({ token });
// }

// const GRADIENT_BACKGROUND = (
// 	<div style={{
// 		zIndex: 0,
// 		position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
// 		backgroundImage: "linear-gradient(21deg, rgba(231,17,17,1) 0%, rgba(231,144,17,1) 81%)",
// 	}} />
// );

// const styles = StyleSheet.create({
// 	container: {
// 		borderRadius: 10,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		height: 40,
// 		paddingHorizontal: 20,
// 		overflow: "hidden",
// 	},

// 	text: {
// 		color: "white",
// 		fontWeight: "500",
// 		zIndex: 1,
// 	}
// });