import { View, Text } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";

export default function OpenSources() {
	const selectText = useSelectText();


	const COLABORATIONS = [
		{
			icon: "🌎",
			title: "React-native Maps",
			description: selectText({
				en: "A react-native library to display geographic maps.",
				fr: "Librairie react-native pour afficher des cartes geographiques.",
			}),
			stars: "14.5k",
			link: "https://github.com/react-native-maps/react-native-maps",
		},
		{
			icon: "🧭",
			title: "React-native Geocoding",
			description: selectText({
				en: "React-native library to convert an address into a geolocation.",
				fr: "Librairie react-native convertir une adresse en geolocalisation.",
			}),
			stars: 200,
			link: "https://github.com/marlove/react-native-geocoding",
		},
		{
			icon: "🎠",
			title: "React-native Reanimated",
			description: selectText({
				en: "A react-native library to create smooth animations.",
				fr: "Librairie react-native pour creer des animations fluides.",
			}),
			stars: "8k",
			link: "https://github.com/software-mansion/react-native-reanimated",
		},
		{
			icon: "❄️",
			title: "Graph-fs",
			description: selectText({
				en: "A node module allowing to browse files as a graph.",
				fr: "Un module permettant de parcourir les fichiers comme un graph.",
			}),
			stars: "(Owner)",
			link: "https://github.com/yairopro/graph-fs",
		},
		{
			icon: "⚛️",
			title: "Vector Icons",
			description: selectText({
				en: "A react-native library of containing thousands of icons.",
				fr: "Librairie react-native contenant des milliers d'icones.",
			}),
			stars: "17k",
			link: "https://github.com/oblador/react-native-vector-icons",
		},
		{
			icon: "🧑🏻‍🚀",
			title: selectText({ en: "This Resume", fr: "Ce CV" }),
			description: selectText({
				en: "Using React, Firebase, Typescript and Three.js for the 3D animation",
				fr: "Utilisant React, Firebase, Typescript et Three.js pour l'animation 3D",
			}),
			stars: "(Owner)",
			link: "https://github.com/yairopro/resume",
		},
	] as const;

	return (
		<Card>
			<AppText style={{ fontSize: 25, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 20, textAlign: 'center' }}>
				Open-sources
			</AppText>
			<AppText style={{ marginBottom: 20, fontSize: 17, textAlign: 'center' }}>
				{
					selectText({
						en: "Here are some of my collaboration to the open-source community",
						fr: "Voici quelques unes de mes colaborations aux projets open-sources"
					})
				}
			</AppText>

			<View style={{ 
				// @ts-ignore
				gap: 20, flexDirection: "row", flexWrap: "wrap", flexGrow: 1, alignContent: "space-around" }}>
				{
					COLABORATIONS.map(({ icon, title, description, stars, link }) =>
						<a href={link} target="_blank" className="view"
							style={{
								textDecoration: "none",
								flexGrow: 1,
								flexBasis: 200,
								margin: "30px 0",
							}}
						>

							<View style={{
								flexDirection: "row",
								
								// @ts-ignore
								gap: 10,
							}}>
								<AppText style={{ fontSize: 40 }}>
									{icon}
								</AppText>

								<View style={{ 
									// @ts-ignore
									gap: 5, flex: 1 }}>
									<AppText style={{ fontWeight: 'bold', fontSize: 14 }}>
										{title}
									</AppText>
									<AppText style={{ color: "lightgrey" }}>
										⭐️ {stars}
									</AppText>
								</View>
							</View>

							<AppText style={{ color: "lightgrey" }}>
								{description}
							</AppText>
						</a>
					)
				}
			</View>

		</Card>
	)
}