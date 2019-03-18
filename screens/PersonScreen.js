import React, {Component} from "react";
import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
import * as ApiClient from "../network/api-client";

export default class PersonScreen extends Component {
	
	static navigationOptions = {
		title: "Person"
	};
	
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			data: {
				name: "GrahamCampbell",
				id: 0,
				location: "fawfa",
				avatar_url: "https://avatars1.githubusercontent.com/u/2829600?v=4"
			}
		}
	}
	
	componentDidMount() {
		const {name = null} = this.props.navigation.state.params;
		if (name) {
			this.setState({isLoading: true});
			this.loadUserData(name)
				.then(data => {
					console.log(data);
					this.setState({
						isLoading: false,
						data
					})
				})
		}
	}
	
	loadUserData = async (userId) => {
		return await ApiClient.getUser(userId);
	};
	
	renderLoading() {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator style={styles.loadingIndicator} size={"large"}/>
			</View>
		)
		
	}
	
	renderData() {
		const {data} = this.state;
		if (data) {
			return (
				<View style={styles.userInfoContainer}>
					<View style={styles.avatarContainer}>
						<Image source={{url: data.avatar_url}} style={styles.avatar}/>
					</View>
					<View style={styles.infoContainer}>
						<Text style={styles.name}>{data.name}</Text>
						<Text style={styles.location}>{data.location}</Text>
					</View>
				</View>
			)
		}
		return null;
	}
	
	renderEmpty() {
	
	}
	
	render() {
		return (
			<View style={styles.container}>
				{this.state.isLoading ? this.renderLoading() : this.renderData()}
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
	loadingContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	loadingIndicator: {
		alignSelf: "center"
	},
	userInfoContainer: {
		flexDirection: "row",
	},
	avatarContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: "hidden",
		marginRight: 10,
	},
	avatar: {
		width: 50,
		height: 50,
	},
	infoContainer: {
		justifyContent: "space-around"
	},
	name: {
		fontWeight: "bold",
		fontSize: 16,
		color: 'black',
	},
	location: {
		color: "gray",
		fontSize: 14,
	}
});