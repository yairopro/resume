import { Image, Text, View } from "react-native";
import Card from "../../component/Card";
import { useSelectText } from "../../hook/useLang";

import firebasePNG from "./firebase.png"
import graphqlPNG from "./graphql.png"
import hasuraPNG from "./hasura.png"
import nodeJSPNG from "./node.png"
import reactPNG from "./react.png"
import typescriptPNG from "./typescript.png"

export default function Skills() {
	const selectText = useSelectText();
	return (
		<Card style={{justifyContent: 'space-evenly', paddingTop: 40}}>
			<Text style={{ fontSize: 25, letterSpacing: 1.1, textAlign: "center", marginBottom: 30, fontWeight: "bold" }}>
				{
					selectText({
						en: `Technologies I'm used to`,
						fr: `Les technologies que je manipule`,
					})
				}
			</Text>

			<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
				{
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
					.map((tech) => 
						<TechRow tech={tech} />
					)
				}

			</View>
		</Card>
	);
}

function TechRow({tech}: {tech: Tech}){
	return (
		<View style={{flexBasis: 200, flexGrow: 1, flexDirection: "row", alignItems: "center"}}>
			<Image source={{uri: tech.logo}} 
			resizeMode="contain"
			style={{ width: 50, height: 50, margin: 20 }} />
			<Text style={{ fontSize: 18, letterSpacing: 1.1, color: tech.color, fontWeight: "bold"}}>
				{tech.name}
			</Text>
		</View>
	);
}

interface Tech {
	logo: string;
	name: string;
	color: string;
}