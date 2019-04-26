import { createStackNavigator, createAppContainer } from 'react-navigation';
import Flood from "./src/screens/Flood";

const Navigator = createStackNavigator({
    Flood: { screen: Flood },
});
const NavigatorApp = createAppContainer(Navigator);
export default NavigatorApp;