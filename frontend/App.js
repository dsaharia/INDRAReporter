
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Navigator from "./Navigator";
import {createAppContainer } from 'react-navigation';

export default createAppContainer(Navigator);

