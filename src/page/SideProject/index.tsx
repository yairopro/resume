import { Image, Text, View } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";
import cryptocurrenciesPicture from "./cryptocurrencies.jpeg"

// TODO Erised + ipronostic
export default function SideProject() {
	const selectText = useSelectText();
	return (
		<Card style={{ overflow: "hidden", flexDirection: "row", padding: 0, flexWrap: "wrap-reverse" }}>

			<View style={{ padding: 20, flexBasis: 200, flexGrow: 1, justifyContent: "space-evenly" }}>
			<AppText style={{ fontSize: 20, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 30, }}>
					{
						selectText({
							en: `In my spare time`,
							fr: `Dans mes temps libre`,
						})
					}
				</AppText>

				<AppText style={{ fontSize: 18, letterSpacing: 1.1 }}>
					{
						selectText({
							en: `I mainly use my spare time to create side projects and participate to open-sources.`
								+ '\n\n' + `The main side project I am working on is a cryptocurrency copy-trader bot.`
								+ '\n\n' + `But I have other projects and open-source libraries I'm invested in.`,
							fr: `J'occupe principalement mes temps libre à créer des projets et à participer à des open-sources.`
							+ `\n\n` + `Le projet principal sur lequel je travaille actuellement est un robot de copy-trading avec les crypto-monnaies.`
							+ '\n\n' + `Il y a aussi d'autre projets et bibliothèques open-source dont je m'investis.`,
						})
					}
				</AppText>
			</View>

			<Image source={{ uri: cryptocurrenciesPicture }} resizeMode="cover" style={{ minWidth: 200, flexGrow: 1, minHeight: 200 }} />
		</Card>
	);
}