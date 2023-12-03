import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export default function Card({...props}: ViewProps) {
	props.style = StyleSheet.compose<ViewStyle>(cardStyle, props.style);
	return <View {...props}/>;
}

export const cardStyle = {
	backgroundColor: "rgba(0, 0, 0, 0.8)",
	borderWidth: 1.5,
	borderColor: "#505050",
	// @ts-ignore
	backdropFilter: "blur(5px)",
	borderRadius: 12,
	minHeight: 500,
	width: "90vw",
	maxWidth: 700,
	alignSelf: "center",
	padding: 20,
	shadowRadius: 10,
	shadowOpacity: .4,
} satisfies ViewStyle;