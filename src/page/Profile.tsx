import { Image, StyleSheet, ImageBackground, Text } from "react-native";
import Card from "../component/Card";
import profilePicture from '../res/profile-picture.jpeg'
import bordersBackground from '../res/gradient-borders.png'
import { useSelectText } from "../hook/useLang";

export default function Profile() {
	const selectText = useSelectText();
	return (
		<Card style={styles.card}>
			<Text style={styles.title}>
				{selectText({
					en: "THIS IS THE RESUME OF",
					fr: "CECI EST LE CV DE",
				})}
				
			</Text>

			<ImageBackground
				source={{ uri: bordersBackground }}
				resizeMode="cover"
				style={styles.pictureBackground}>
				<Image
					source={{ uri: profilePicture }}
					resizeMode="cover"
					style={styles.picture} />
			</ImageBackground>

			<Text style={styles.name}>
				Yair Behar
			</Text>

			<Text style={styles.subtitle}>
				Javascript developer
			</Text>

		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		justifyContent: "center"
	},

	pictureBackground: {
		height: 150,
		width: 150,
		borderRadius: 75,
		overflow: "hidden",
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},

	picture: {
		height: 145,
		width: 145,
		borderRadius: 145 / 2,
		borderWidth: 5,
		borderColor: "white",
	},

	title: {
		fontSize: 25,
		letterSpacing: 1.5,
		position: "absolute",
		textAlign: "center",
		top: 20,
		left: 0,
		right: 0,
	},

	name: {
		fontSize: 30,
		fontWeight: "bold",
		letterSpacing: 1.2,
	},

	subtitle: {
		fontSize: 16
	},
});