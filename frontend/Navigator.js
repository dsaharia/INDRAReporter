import { createStackNavigator, createAppContainer } from 'react-navigation';
import Flood from "./src/screens/Flood";
import Rain from "./src/screens/Rain";
import Indra from './src/screens/Indra'

const Navigator = createStackNavigator({
    Flood: {
        screen: Flood,
    navigationOptions: {
        title: 'Flood',
        },
    },
    Rain: {
        screen: Rain,
        navigationOptions: {
          title: 'Rain',
        },
    },
    Indra: {
        screen: Indra,
        navigationOptions: {
        title: 'Indra',
        header: null,
        }
    },

},
{
    initialRouteName: 'Indra'
}
);


export default Navigator;