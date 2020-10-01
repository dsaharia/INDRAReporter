import React from 'react';
import { createDrawerNavigator , createAppContainer} from 'react-navigation';
import Rain from './src/screens/Rain';
import Indra from './src/screens/Indra';
import Navigator from './Navigator';

const Drawer = createDrawerNavigator({
    Rain : { screen: Rain },
},
{
    initialRouteName: Navigator,
});
const Draw = createAppContainer(Drawer)
export default Draw;