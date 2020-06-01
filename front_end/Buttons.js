import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

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
                    onPress={() => {this.props.navigation.navigate('FloodImpact',{
                            selectReport: this.props.selectReport(),
                            lat: this.props.location.latitude,
                            long: this.props.location.longitude,
                            timestamp: this.props.location.timestamp, });
                    }}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/flood.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Flood Impact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Landslide', {
                        selectReport: this.props.selectReport()});
                    }}
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
        // justifyContent: 'center',
    },
    rows: {
        // backgroundColor: '#b3e5fc',
        padding: 6,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 15,

    },
    text: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 13,
        fontFamily: 'Arial',
        textAlign: 'center',
        justifyContent: 'space-evenly', //important
        paddingTop: 5,
    },
    button: {
        // height: 85,
        // width: 80,
        height: '30%',
        width: '30%',
        // paddingLeft: 5,
        // paddingTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        padding: 20,
        // paddingTop: 3,
        // marginBottom: 2,
    },
});