import { Image, Text, View } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";
import shopinzonAppPicture from "./shopinzon-app.jpeg"

export default function Story() {
	const selectText = useSelectText();
	return (
		<Card style={{ overflow: "hidden", flexDirection: "row", padding: 0, flexWrap: "wrap" }}>
			<Image source={{ uri: shopinzonAppPicture }} resizeMode="cover" style={{ minWidth: 200, flexGrow: 1, minHeight: 200 }} />

			<View style={{ padding: 20, flexBasis: 200, justifyContent: 'center', flexGrow: 1 }}>

			<Text style={{ fontSize: 20, letterSpacing: 1.1, fontWeight: "bold", marginVertical: 40, }}>
					{
						selectText({
							en: `My story`,
							fr: `Mon histoire`,
						})
					}
				</Text>

				<Text style={{ fontSize: 18, letterSpacing: 1.1 }}>
					{
						selectText({
							en: `From 2015 to 2022, I was part of a team in a startup called Shopinzon. Its purpose is to gather local shops, with their products and services, into a marketplace.\n\nThrough this adventure, my team and me have used the latest trending technologies such as React-Native, Firebase and Hasura.`,
							fr: `De 2015 à 2022, j'ai fait partie d'une équipe dans une startup appelée Shopinzon. Son but est de réunir les commerçants locaux, ainsi que leurs articles et services, dans une marketplace centralisée.\n\nTout au long de cette aventure, mon équipe et moi avons utilisé les dernières technologies tel-que React-Native, Firebase et Hasura.`
						})
					}
				</Text>
			</View>
		</Card>
	);
}