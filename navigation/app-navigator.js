import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import PersonScreen from "../screens/PersonScreen";

const RootNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Person: {
		screen: PersonScreen
	}
});

const AppNavigator = createAppContainer(RootNavigator);

export default AppNavigator;