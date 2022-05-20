import { Image, StyleSheet } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";
import picturePNG from './picture.png';

export default function Profile() {
	const selectText = useSelectText();
	return (
		<Card style={styles.card}>
			<AppText style={styles.title}>
				{
					selectText({
						en: "THIS IS THE RESUME OF",
						fr: "CECI EST LE CV DE",
					})
				}

			</AppText>

			<Image
				source={{ uri: picturePNG }}
				resizeMode="cover"
				style={styles.picture} />

			<AppText style={styles.name}>
				Yair Behar
			</AppText>

			<AppText style={styles.subtitle}>
				Senior Fullstack Developer
			</AppText>

		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},

	picture: {
		height: 150,
		width: 150,
		marginTop: 70,
		marginBottom: 40,
	},

	title: {
		fontSize: 20,
		letterSpacing: 1.5,
		position: "absolute",
		textAlign: "center",
		top: 70,
		left: 0,
		right: 0,
	},

	name: {
		fontSize: 30,
		fontWeight: "bold",
		letterSpacing: 1.2,
		marginBottom: 10,
		textAlign: "center",
	},

	subtitle: {
		fontSize: 16,
		textAlign: "center",
	},
});