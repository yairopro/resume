import { StyleSheet, Text, TextProps } from "react-native";

export default function AppText({...props}: TextProps){
	props.style = StyleSheet.compose({color: "white"}, props.style);
	return <Text {...props} />;
}