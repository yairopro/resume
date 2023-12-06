import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";
import apolloPNG from "./apollo.png";
import ethereumPNG from "./ethereum.png";
import firebasePNG from "./firebase.png";
import graphqlPNG from "./graphql.png";
import hasuraPNG from "./hasura.png";
import nodeJSPNG from "./node.png";
import pdfIcon from "./pdf.svg";
import postgrePNG from "./postgre.png";
import puppeteerPNG from "./puppeteer.png";
import reactPNG from "./react.png";
import stripePNG from "./stripe.png";
import typescriptPNG from "./typescript.png";

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
								logo: nodeJSPNG,
								name: "NodeJS",
								color: "#3c873a",
								url: "https://nodejs.org/en/about",
								subtitle: "A JS-Engine",
							},
							{
								logo: reactPNG,
								name: "React-Native",
								color: "#61DBFB",
								url: "https://reactnative.dev/",
								subtitle: "Framework to build apps",
							},
							{
								logo: typescriptPNG,
								name: "Typescript",
								color: "#3178C6",
								url: "https://www.typescriptlang.org/",
								subtitle: "Best programing language"
							},
							{
								logo: firebasePNG,
								name: "Firebase",
								color: "#FFA000",
								url: "https://firebase.google.com/",
								subtitle: "A cloud infrastructure",
							},
							{
								logo: graphqlPNG,
								name: "GraphQL",
								color: "#E10098",
								url: "https://graphql.org/",
								subtitle: "A graph query language",
							},
							{
								logo: hasuraPNG,
								name: "Hasura",
								color: "#1EB4D4",
								url: "https://hasura.io/",
								subtitle: "To build a Graphql API",
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
										url: "https://www.postgresql.org/",
										subtitle: "A relational Database",
									},
									{
										logo: stripePNG,
										name: "Stripe",
										color: "#5433FF",
										url: "https://stripe.com/",
										subtitle: "Payment management",
									},
									{
										logo: pdfIcon,
										name: "PdfKit",
										color: "red",
										url: "https://pdfkit.org/",
										subtitle: "PDF generation (used for invoice)"
									},
									{
										logo: apolloPNG,
										name: "Apollo Client",
										color: "#6830E9",
										url: "https://www.apollographql.com/",
										subtitle: "A Graphql query client"
									},
									{
										logo: puppeteerPNG,
										name: "Puppeteer",
										color: "rgb(1, 209, 157)",
										url: "https://pptr.dev/",
										subtitle: "Control Browser to prerender (used for SEO)"
									},
									{
										logo: ethereumPNG,
										name: "Ether.js",
										color: "lightgrey",
										url: "https://ethereum.org/",
										subtitle: "For crypto-currencies"
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
		<a href={tech.url} target="_blank" className="view"

			style={{ flexBasis: 200, flexGrow: 1, flexDirection: "row", alignItems: "center", textDecoration: "none" }}>

			<Image
				source={{ uri: tech.logo }}
				resizeMode="contain"
				style={{ width: 50, height: 50, margin: 20, borderRadius: 5 }} />

			<View style={{ flex: 1 }}>
				<AppText style={{ fontSize: 18, color: tech.color, fontWeight: "bold", marginBottom: 5 }}>
					{tech.name}
				</AppText>

				<AppText style={{ fontSize: 12, letterSpacing: .9, color: "white" }}>
					{tech.subtitle}
				</AppText>
			</View>
		</a>
	);
}

interface Tech {
	logo: string;
	name: string;
	color: string;
	url: string,
	subtitle: string,
}