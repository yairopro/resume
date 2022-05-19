import { View } from "react-native";
import { useSelectText } from "../hook/useLang";
import AppText from "./Text";

export default function ScrollDownIndicator() {
	const selectText = useSelectText();
	return (
		<View style={styles.layout}>
			<AppText style={styles.text}>
				{
					selectText({
						en: "Scroll down to see more",
						fr: "Faites défiler vers le bas pour voir plus",
					})
				}
			</AppText>

			<style>
				{`
					@keyframes scrollDownIndicator {
						0% {
							transform: translateY(0);
						}
						50% {
							transform: translateY(10px);
						}
						100% {
							transform: translateY(0);
						}
					}
					#scrollDownIndicator {
						animation: scrollDownIndicator 1.5s infinite;
					}
				`}
			</style>
			<AppText nativeID="scrollDownIndicator" style={styles.icon}>
				↓
			</AppText>
		</View>
	);
}

const styles = {
	layout: {
		alignItems: 'center',
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
	},

	text: {
		textAlign: "center",
		marginBottom: 15
	},

	icon: {
		fontSize: 30,
	}
} as const;