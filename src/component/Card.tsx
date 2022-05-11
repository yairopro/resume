import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export default function Card({...props}: ViewProps) {
	props.style = StyleSheet.compose(cardStyle, props.style);
	return <View {...props}/>;
}

export const cardStyle: ViewStyle = {
	backgroundColor: "white",
	borderRadius: 12,
	minHeight: 500,
	width: "90vw",
	maxWidth: 700,
	alignSelf: "center",
	padding: 20,
	shadowColor: "black",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowRadius: 10,
	shadowOpacity: .4,
};