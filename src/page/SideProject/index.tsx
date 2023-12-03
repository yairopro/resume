import { useState } from "react";
import { Image, View, ViewStyle } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";
import cryptocurrenciesPicture from "./cryptocurrencies.jpeg";


export default function SideProject() {
	const selectText = useSelectText();

	return (
		<Card style={styles.card}>
			<View style={{ padding: 25, flexBasis: 200, flexGrow: 1, justifyContent: "space-evenly" }}>
				<AppText style={{ fontSize: 30, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 20 }}>
					{
						selectText({
							en: `Side projects`,
							fr: `Projets personnels`,
						})
					}
				</AppText>

				<AppText style={{ fontSize: 20, letterSpacing: 1.1 }}>
					{
						selectText({
							en: `I mainly use my spare time to work on side projects.`,
							fr: `J'occupe principalement mes temps libre à travailler sur des projets personnels.`,
						})
					}
				</AppText>

				<View style={{
					height: .5,
					backgroundColor: "lightgrey",
					width: 150,
					alignSelf: 'center',
					margin: 30,
				}} />

				<View >
					<AppText style={{ fontWeight: "bold", fontSize: 20, color: "#02D96D", letterSpacing: 1.1, lineHeight: 40 }}>
						iPronostic
					</AppText>
					<AppText style={{ fontSize: 18, letterSpacing: 1.1 }}>
						{
							selectText({
								en: `I've launched a web app called iPronostic where users can put a pronostic on coming soccer matches `
									+ `and have a personal score based on how much the matches' results matches their pronostics.`,
								fr: `J'ai lancé une plateforme web nommée iPronostic où les utilisateurs peuvent faire un pronostic sur les matchs de football à venir et avoir un score personnel basé le niveau de correspondance des résultats des matchs avec leurs pronostics.`,
							})
						}
					</AppText>
					<a href="https://ipronostic.com"
						target="_blank"
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							lineHeight: 2,
							color: "#02D96D",
							letterSpacing: 1.1,
							fontSize: 18,
						}}>
						{
							selectText({
								en: `Visit iPronostic ›`,
								fr: `Visiter iPronostic ›`,
							})
						}
					</a>
				</View>

				<View style={{
					height: .5,
					backgroundColor: "lightgrey",
					width: 150,
					alignSelf: 'center',
					margin: 30,
				}} />

				<View >
					<AppText style={{ fontWeight: "bold", fontSize: 20, color: "goldenrod", letterSpacing: 1.1, lineHeight: 40 }}>
						Blockchain crawler
					</AppText>
					<AppText style={{ fontSize: 18, letterSpacing: 1.1 }}>
						{
							selectText({
								en: `I also started to work on a project about finding the most performant crypto-wallets on blockchains in order to copy their investment positions over time and follow their performance automatically.`,
								fr: `J'ai aussi commencé à travailler sur un projet visant à trouver les crypto-wallets les plus performants sur les blockchains afin de copier leurs positions d'investissement au fil du temps et suivre automatiquement leurs performances.`,
							})
						}
					</AppText>
				</View>
			</View>

			<Image source={{ uri: cryptocurrenciesPicture }} resizeMode="cover" style={{ minWidth: 200, flexGrow: 1, minHeight: 200 }} />
		</Card>
	);
}

// @ts-ignore
const styles = {
	root: {
		"perspective": "1000px",
	},

	inner: {
		transition: "transform 0.6s",
		transformStyle: "preserve-3d",
	},

	carousel: {
		flex: 1,
		width: '100vw',
		alignItems: "center",
		justifyContent: "center",
		overflow: "scroll",
		flexDirection: "row",
		// gap: `calc((100vw - min(${cardStyle.maxWidth}px, ${cardStyle.width}))/2 )`
	},

	card: {
		overflow: "hidden",
		flexDirection: "row",
		padding: 0,
		flexWrap: "wrap-reverse",
		backfaceVisibility: "hidden",
	},

	over: {
		transform: "rotateY(180deg)",
	}
} as Record<string, ViewStyle>;