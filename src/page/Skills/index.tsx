import { Image, Pressable, Text, View } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";

import firebasePNG from "./firebase.png"
import graphqlPNG from "./graphql.png"
import hasuraPNG from "./hasura.png"
import nodeJSPNG from "./node.png"
import reactPNG from "./react.png"
import typescriptPNG from "./typescript.png"
import postgrePNG from "./postgre.png"
import stripePNG from "./stripe.png"
import pdfPNG from "./pdf.png"
import rxjsPNG from "./rxjs.png"
import puppeteerPNG from "./puppeteer.png"
import ethereumPNG from "./ethereum.png"
import { useState } from "react";
import AppText from "../../component/Text";

export default function Skills() {
	const [showMore, setShowMore] = useState<boolean>(false);
	const selectText = useSelectText();
	return (
		<Card style={{ justifyContent: 'space-evenly', paddingTop: 40 }}>
			<AppText style={{ fontSize: 25, letterSpacing: 1.1, textAlign: "center", marginBottom: 30, fontWeight: "bold" }}>
				{
					selectText({
						en: `My skills`,
						fr: `Mes compétences`,
					})
				}
			</AppText>

			<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
				{
					mapToTechRows(
						[
							{
								logo: firebasePNG,
								name: "Firebase",
								color: "#FFA000",
							},
							{
								logo: graphqlPNG,
								name: "GraphQL",
								color: "#E10098",
							},
							{
								logo: hasuraPNG,
								name: "Hasura",
								color: "#1EB4D4",
							},
							{
								logo: nodeJSPNG,
								name: "NodeJS",
								color: "#3c873a",
							},
							{
								logo: reactPNG,
								name: "React-Native",
								color: "#61DBFB",
							},
							{
								logo: typescriptPNG,
								name: "Typescript",
								color: "#3178C6",
							},
						]
					)
				}

			</View>

			{
				showMore ?
					<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
						{
							mapToTechRows(
								[
									{
										logo: postgrePNG,
										name: "postgreSQL",
										color: "#336791",
									},
									{
										logo: stripePNG,
										name: "Stripe",
										color: "#5433FF",
									},
									{
										logo: pdfPNG,
										name: "PdfKit",
										color: "red",
									},
									{
										logo: rxjsPNG,
										name: "RxJS",
										color: "rgb(241, 0, 144)",
									},
									{
										logo: puppeteerPNG,
										name: "Puppeteer",
										color: "rgb(1, 209, 157)",
									},
									{
										logo: ethereumPNG,
										name: "Solidity",
										color: "grey",
									},
								]
							)
						}
					</View> : (
						<Pressable
							onPress={() => setShowMore(true)}
							style={{
								borderWidth: 1,
								borderRadius: 10,
								alignItems: "center",
								justifyContent: "center",
								borderColor: "white",
								alignSelf: "center",
								paddingHorizontal: 25,
								marginVertical: 10,
							}}>
							<AppText
								style={{
									textAlign: "center",
									paddingVertical: 10,
									fontSize: 18,
								}}>
									{
										selectText({
											en: "Show more",
											fr: "Voir plus",
										})
									}
							</AppText>
						</Pressable>

					)
			}
		</Card>
	);
}

const mapToTechRows = (techs: Tech[]) => techs.map((tech, index) => <TechRow key={index} tech={tech} />);

function TechRow({ tech }: { tech: Tech }) {
	return (
		<View style={{ flexBasis: 200, flexGrow: 1, flexDirection: "row", alignItems: "center" }}>
			<Image source={{ uri: tech.logo }}
				resizeMode="contain"
				style={{ width: 50, height: 50, margin: 20 }} />
			<AppText style={{ fontSize: 18, letterSpacing: 1.1, color: tech.color, fontWeight: "bold" }}>
				{tech.name}
			</AppText>
		</View>
	);
}

interface Tech {
	logo: string;
	name: string;
	color: string;
}