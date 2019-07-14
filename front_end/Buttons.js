
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import { Icon } from 'native-base';

export default class Buttons extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.rows}>
                    <TouchableOpacity style={styles.button}>
                        <ImageBackground source={require('./icons/testing.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Test</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rain')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/rain.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Rain</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('FloodLevel')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/sea-level.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Flood Level</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Flood')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/flood.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Flood Damage</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('Rain')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/landslide.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Landslide</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ImageBackground source={require('./icons/visibility.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Visibility</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ImageBackground source={require('./icons/earthquake.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Earthquake</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <ImageBackground source={require('./icons/cyclone.png')} style={styles.image}>
                        </ImageBackground>
                        <Text style={styles.text}>Cyclone</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
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
        textAlign: 'left',
    },
    button:{
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
