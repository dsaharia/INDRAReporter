import { createStackNavigator } from 'react-navigation';
import FloodImpact from "./src/screens/FloodImpact";
import Rain from "./src/screens/Rain";
import Indra from './src/screens/Indra';
import FloodLevel from './src/screens/FloodLevel';
import Storm from './src/screens/Storm';
import Visibility from './src/screens/Visibility';
import Lightning from './src/screens/Lightning';
import Flood from './src/screens/Flood';
import Landslide from './src/screens/Landslide';

const Navigator = createStackNavigator({
    Test: {
        screen: Flood,
        navigationOptions: {
            title: 'Test',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    FloodImpact: {
        screen: FloodImpact,
        navigationOptions: {
            title: 'Flood Impact',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },

    },
    FloodLevel: {
        screen: FloodLevel,
        navigationOptions: {
            title: 'Flood Level',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Rain: {
        screen: Rain,
        navigationOptions: {
            title: 'Rain',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Landslide: {
        screen: Landslide,
        navigationOptions: {
            title: 'Landslide',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Storm: {
        screen: Storm,
        navigationOptions: {
            title: 'Storm',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Visibility: {
        screen: Visibility,
        navigationOptions: {
            title: 'Visibility',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Lightning: {
        screen: Lightning,
        navigationOptions: {
            title: 'Lightning',
            headerStyle: {
                backgroundColor: '#093F61'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',

            }
        },
    },
    Indra: {
        screen: Indra,
        navigationOptions: {
            title: 'Indra',
            header: null,
        }
    },

}, {
    initialRouteName: 'Indra'
});


export default Navigator;