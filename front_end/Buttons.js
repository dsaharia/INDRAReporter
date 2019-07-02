
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
                        </ImageBackground>
                        <Text style={styles.text}>Flood</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rain')}
                    style={styles.button}>
                        <ImageBackground source={require('./icons/rain.png')} style={styles.image}>      
                        </ImageBackground>
                        <Text style={styles.text}>Rain</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Rain')}
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
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3e5fc',
        padding: 7,
    },
    rows: {
        backgroundColor: '#b3e5fc',
        padding: 7,
        alignSelf: 'flex-start',
        flexDirection: 'row',
 
    },
    text: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 13,
        fontFamily: 'Ariel',
        textAlign: 'left',
    },
    button:{
        height: 70,
        width: 80,
    },
    image: {
        height: 50,
        width: 50,
        justifyContent: 'center'
    },
});
