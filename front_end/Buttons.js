import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';

export default class Buttons extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.rows}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('Test')}>
                        <ImageBackground source={require('./icons/testing.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Test</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Rain',{
                            selectReport: this.props.selectReport() });
                    }}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/rain.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Rain</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('FloodLevel' , {
                            lat: this.props.location.latitude,
                            long: this.props.location.longitude,
                            timestamp: this.props.location.timestamp,
                        });
                    }}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/sea-level.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Flood Level</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('FloodImpact',{
                            selectReport: this.props.selectReport() });
                    }}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/flood.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Flood Impact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Landslide')}}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/landslide.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Landslide</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Visibility' ,{
                            selectReport: this.props.selectReport() });
                    }} >
                        <ImageBackground source={require('./icons/visibility.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Visibility</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ImageBackground source={require('./icons/earthquake.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Earthquake</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Storm', {
                            selectReport: this.props.selectReport() })
                    }} >
                        <ImageBackground source={require('./icons/cyclone.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Storm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Lightning' , {
                            selectReport: this.props.selectReport() });
                    }} >
                        <ImageBackground source={require('./icons/storm.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Lightning</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3e5fc',
        padding: 6,
    },
    rows: {
        backgroundColor: '#b3e5fc',
        padding: 6,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    text: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 11,
        fontFamily: 'Arial',
        textAlign: 'justify',
    },
    button: {
        height: 80,
        width: 80,
        paddingLeft: 18,
    },
    image: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        paddingTop: 3,
    },
});