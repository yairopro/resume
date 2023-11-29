import Card from "../../component/Card";
import AppText from "../../component/Text";
import { useSelectText } from "../../hook/useLang";

export default function OpenSources() {
	const selectText = useSelectText();
	return (
		<Card>
			<AppText style={{ fontSize: 20, letterSpacing: 1.1, fontWeight: "bold", marginBottom: 30 }}>
				{
					selectText({
						en: `Open-sources`,
						fr: `Open-sources`,
					})
				}
			</AppText>

			{/* 
				https://github.com/software-mansion/react-native-reanimated
				https://github.com/MR03web/react-native-set-soft-input-mode
				https://github.com/react-native-maps/react-native-maps
				https://github.com/oblador/react-native-vector-icons
				https://github.com/marlove/react-native-geocoding
				https://github.com/yairopro/graph-fs
			*/}
		</Card>
	)
}