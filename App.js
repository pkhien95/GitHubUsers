import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from "./navigation/app-navigator";

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<AppNavigator/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	}
});
