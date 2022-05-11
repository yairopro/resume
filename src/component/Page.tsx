import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export default function Page({...props}: ViewProps) {
	props.style = StyleSheet.compose(cardStyle, props.style);
	return <View {...props}/>;
}

export const cardStyle: ViewStyle = {
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
	paddingVertical: 20,
	width: "100%",
};