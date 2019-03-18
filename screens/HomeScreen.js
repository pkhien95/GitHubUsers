import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Constants from "../constants/app-constants";
import UserItem from "../components/UserItem";

export default class HomeScreen extends Component {
	
	static navigationOptions = {
		title: "Home"
	};
	
	constructor(props) {
		super(props);
		this.userList = Constants.githubUserList;
	}
	
	userItemOnPress(name) {
		if (name && name !== "") {
			this.props.navigation.navigate("Person", {name: name.trim().toLowerCase()});
		}
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>Top 5 Github Users</Text>
				<Text style={styles.note}>Tap the username to see more information</Text>
				<View style={styles.userListContainer}>
					{
						this.userList.map(name => {
							return (
								<UserItem name={name} key={name} style={styles.userItem}
								          onPress={() => this.userItemOnPress(name)}/>
							)
						})
					}
				</View>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 15,
		justifyContent: "flex-start",
		alignItems: "stretch",
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "black",
	},
	note: {
		fontSize: 14,
		color: "black",
		marginTop: 10,
	},
	userListContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 10,
	},
	userItem: {
		marginRight: 10,
		marginBottom: 10,
	}
});