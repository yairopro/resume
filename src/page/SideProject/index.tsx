import { Image, Text, View } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";
import cryptocurrenciesPicture from "./cryptocurrencies.png"

export default function SideProject() {
	const selectText = useSelectText();
	return (
		<Card style={{ overflow: "hidden", flexDirection: "row", padding: 0, flexWrap: "wrap-reverse" }}>

			<View style={{ padding: 20, flexBasis: 200, flexGrow: 1, justifyContent: "center" }}>
			<Text style={{ fontSize: 20, letterSpacing: 1.1, fontWeight: "bold", marginVertical: 40, }}>
					{
						selectText({
							en: `Side project in my spare time`,
							fr: `Projet en libre-temps`,
						})
					}
				</Text>

				<Text style={{ fontSize: 18, letterSpacing: 1.1 }}>
					{
						selectText({
							en: `Being fascinated by cryptocurrencies, I started to learn about it and the blockchain technology.`
								+ '\n\n' + `Step by step, my knowledge has grown and I've started to develop a project about it on my spare time.`,
							fr: `Étant fasciné par les crypto-monnaies, j'ai commencé à m'y intéresser ainsi qu'à la technologie blockchain.`
								+ '\n\n' + `Pas à pas, mes connaissances ont grandi et j'ai commencé à développer un projet à ce sujet dans mes temps libre.`
						})
					}
				</Text>
			</View>

			<Image source={{ uri: cryptocurrenciesPicture }} resizeMode="cover" style={{ minWidth: 200, flexGrow: 1, minHeight: 200 }} />
		</Card>
	);
}