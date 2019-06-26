
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
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Flood')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/flood.png')} style={styles.image}>
                            <Text style={styles.text}>Flood</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rain')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/rain.png')} style={styles.image}>
                            <Text style={styles.text}>Rain</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rain')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/landslide.png')} style={styles.image}>
                            <Text style={styles.text}>Landslide</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={require('./icons/visibility.png')} style={styles.image}>
                            <Text style={styles.text}>Visibility</Text>
                        </ImageBackground>
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
        padding: 8,
    },
    rows: {
        backgroundColor: '#b3e5fc',
        padding: 8,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 15,
        fontFamily: 'monospace',
        bottom: 0,
        position: 'absolute',
    },
    button:{
        borderRadius: 6,
        height: 70,
        width: 70,
        margin: 7,
    },
    image: {
        height: 70,
        width: 70,
    },
});
