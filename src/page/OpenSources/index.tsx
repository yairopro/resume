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
				fr: "Une librairie react-native pour afficher des cartes geographiques.",
			}),
			stars: "14.5k",
			link: "https://www.npmjs.com/package/react-native-maps",
		},
		{
			icon: "🧭",
			title: "React-native Geocoding",
			description: selectText({
				en: "A React-native library to convert an address into a geolocation.",
				fr: "Une librairie react-native convertir une adresse en geolocalisation.",
			}),
			stars: 200,
			link: "https://www.npmjs.com/package/react-native-geocoding",
		},
		{
			icon: "🎠",
			title: "React-native Reanimated",
			description: selectText({
				en: "A react-native library to create smooth animations.",
				fr: "Une librairie react-native pour creer des animations fluides.",
			}),
			stars: "8k",
			link: "https://docs.swmansion.com/react-native-reanimated/",
		},
		{
			icon: "❄️",
			title: "Graph-fs",
			description: selectText({
				en: "A node module allowing to browse files intuitively as a graph. Leave me a star ⭐️.",
				fr: "Un module permettant de parcourir les fichiers comme un graph. Mettez moi une étoile ⭐️.",
			}),
			stars: "(Owner)",
			link: "https://www.npmjs.com/package/graph-fs",
		},
		{
			icon: "⚛️",
			title: "Vector Icons",
			description: selectText({
				en: "A react-native library containing thousands of icons.",
				fr: "Une librairie react-native contenant des milliers d'icones.",
			}),
			stars: "17k",
			link: "https://oblador.github.io/react-native-vector-icons/",
		},
		{
			icon: "🧑🏻‍🚀",
			title: selectText({ en: "This Resume", fr: "Ce CV" }),
			description: selectText({
				en: "It relies on React, Firebase, Typescript and Three.js for the 3D animation behind.",
				fr: "Utilisant React, Firebase, Typescript et Three.js pour l'animation 3D",
			}),
			stars: "(Owner)",
			link: "https://github.com/yairopro/resume",
		},
	] as const;

	return (
		<Card style={{ padding: 30 }}>
			<AppText style={{ fontSize: 25, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 20, textAlign: 'center' }}>
				Open-sources
			</AppText>

			<AppText style={{ marginBottom: 50, fontSize: 17, textAlign: 'center' }}>
				{
					selectText({
						en: "I participate to open-source libraries when needed. Here are some open-source projects I own or collaborated",
						fr: "Je participe à des bibliothèques open-sources lorsque nécessaire. Voici quelques projets open-source auxquels j'ai collaboré ou que je possède"
					})
				}
			</AppText>

			<View style={{
				// @ts-ignore
				gap: 40, flexDirection: "row", flexWrap: "wrap", flexGrow: 1, alignContent: "space-around",
				justifyContent: "space-between",
			}}>
				{
					COLABORATIONS.map(({ icon, title, description, stars, link }) =>
						<a href={link} target="_blank" className="view"
							style={{
								textDecoration: "none",
								flexGrow: 1,
								flexBasis: 200,
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
									gap: 5, flex: 1
								}}>
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