import React, { Component } from 'react';
import { YellowBox, View, Alert, Text, StyleSheet, StatusBar } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
]);
import Buttons from '../../Buttons';
import SubmitButton from "../components/SubmitButton";
import SelectedReport from '../components/SelectedReport';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function convertToUTC(unixTime) {
    const date = new Date(unixTime)
    return date.toUTCString().toString()
}

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            loc: false,
            latitude: null,
            longitude: null,
            timestamp: null,
            error: null,
        };
    }
    componentWillMount() {
      console.log("Will mount!")
      const that = this
        const geoOptions = {
            enableHighAccuracy: false,
            timeout: 20000,
        };
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    // timestamp: position.timestamp,
                    timestamp: convertToUTC(position.timestamp),
                    error: null,
                    loc: true,
                });
                
            },
            error => Alert.alert(error.message), geoOptions);
        
    }
    render() {
        return (
            <View style={styles.container}>
          <StatusBar
         backgroundColor="#093F61"
         barStyle="light-content" />
         
         <View style={styles.navbar}>
             <Text style={styles.indraText}>
             Project INDRA {'\n'} International Natural Disaster Research and Analysis
             </Text>
         </View>
         <Buttons navigation={this.props.navigation} />
         <SelectedReport report="Sample Type" />
         <View style={styles.mapContainer}>
         {this.state.loc &&
                <MapView
                style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.07,
                    longitudeDelta: 0.07,
                  }}>
                  <MapView.Marker
                        coordinate={{latitude: this.state.latitude,
                        longitude: this.state.longitude}}
                        title={"Your Location"}
                        description={"description"}
                     />
                  </MapView>
              }
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
    indraText: {
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
        bottom: 70,
    },

});