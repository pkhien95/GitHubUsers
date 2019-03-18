import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

export default UserItem = (props) => {
	if (props.name && props.name !== "") {
		return (
			<TouchableOpacity style={[props.style, styles.touchable]} onPress={() => {
				props.onPress ? props.onPress() : null;
			}}>
				<View style={styles.container}>
					<Text style={styles.text}>{props.name}</Text>
				</View>
			</TouchableOpacity>
		
		)
	}
	return null;
}

const styles = StyleSheet.create({
	touchable: {},
	container: {
		backgroundColor: "#356FFF",
		padding: 10,
		borderRadius: 3,
		overflow: "hidden"
	},
	text: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold"
	}
});