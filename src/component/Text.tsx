import { StyleSheet, Text, TextProps } from "react-native";

export default function AppText({ ...props }: TextProps) {
	props.style = StyleSheet.compose({ color: "white", textShadowColor: "black", textShadowRadius: 3 }, props.style);
	return <Text {...props} />;
}