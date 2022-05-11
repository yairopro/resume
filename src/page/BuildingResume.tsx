import moment from "moment";
import { useEffect, useState } from "react";
import { Image, Text, View, ImageBackground } from "react-native";
import Card from "../component/Card";
import { useSelectText } from "../hook/useLang";
import mobileAppPicture from "../res/mobile-app.jpg"
import timeBackgroundPicture from "../res/time-background.jpeg"

export default function BuildingResume() {
	{// refresh each second
		const [, refresh] = useState<{}>({});
		useEffect(() => {
			const id = setInterval(() => refresh({}), 1000);
			return () => clearInterval(id);
		}, []);
	}

	const duration = moment.duration(Date.now() - LIVE_SINCE);

	const selectText = useSelectText();
	return (
		<Card style={{ overflow: "hidden", padding: 0 }}>
			<ImageBackground
				source={{ uri: timeBackgroundPicture }}
				resizeMode="cover"
				style={{ flexGrow: 1 }}>
				<View style={{
					backgroundColor: "rgba(0,0,0,0.5)",
					alignItems: 'center',
					justifyContent: 'center',
					flexGrow: 1,
				}}>
					<Text style={{
						color: "white",
						fontSize: 20,
						textAlign: 'center',
						marginBottom: 50,
					}}>
						{
							selectText({
								fr: `Le CV est encore en construction\net est en ligne depuis`,
								en: `The resume is still under construction\nand is live since`,
							})
						}
					</Text>

					<Text style={{
						fontSize: 50,
						color: "white",
						textAlign: 'center'
					}}>
						{
							[
								duration.hours(),
								duration.minutes(),
								duration.seconds(),
							]
							.map(value => {
								const valueString = value.toString();
								return valueString.length === 1 ? `0${valueString}` : valueString;
							})
								.join(':')
						}
					</Text>

				</View>



			</ImageBackground>
		</Card>
	);
}

const LIVE_SINCE = 1652254775405;