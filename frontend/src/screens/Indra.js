import React, { Component } from 'react';
import { YellowBox, View, Alert, Text, StyleSheet, StatusBar } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
]);
import Buttons from '../../Buttons';
import SubmitButton from "../components/SubmitButton";
import SelectedReport from '../components/SelectedReport';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


export default class App extends Component {
//     componentDidMount(){
//             Alert.alert("Mounted!")
// }
    render() {
        return (
            <View style={styles.container}>
          <StatusBar
         backgroundColor="#093F61"
         barStyle="light-content" />
         
         <View style={styles.navbar}>
             <Text style={styles.indra_text}>
             Project INDRA {'\n'} International Natural Disaster Research and Analysis
             </Text>
         </View>
         <Buttons navigation={this.props.navigation} />
         <SelectedReport />
         <View style={styles.mapContainer}>
                <MapView
                style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: 26.052349,
                    longitude: 92.860390,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                  }}>
                  <MapView.Marker
                        coordinate={{latitude: 26.052349,
                        longitude: 92.860390}}
                        title={"title"}
                        description={"description"}
                     />
                  </MapView>
          </View>
         <SubmitButton />
      </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3e5fc'
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#b3e5fc'
    },
    navbar: {
        height: 55,
        backgroundColor: '#093F61',
        elevation: 4
    },
    indra_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 11,
        right: 11,
        bottom: 20,
  },

});