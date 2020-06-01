import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
    FlatList,
} from 'react-native';
// import Navigator from '../../Navigator';

const reports = [
    { key: "SEVERE - Affecting entire communities. Buildings swept away. Large scale evacuation." },
    { key: "SIGNIFICANT - Affecting section of communities. Flooded street and stranded vehicles." },
    { key: "MINOR - Localized flooding of land and roads. Disruption of travel to key flooding sites." },
    { key: "MINIMAL - Isolated flooding in low-lying areas. Wet road surfaces." },
]

const colors = ['#D9070A', '#F4810C', '#FCE50C', '#197EFA']
export default class FloodImpact extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.navigation.state.params)
    }
    onSelect = (option) => {
        this.props.navigation.navigate('FloodLevel', {
            lat: this.props.navigation.state.params.lat,
            long: this.props.navigation.state.params.long,
            timestamp: this.props.navigation.state.params.timestamp,
        });
        // console.log("ss", this.props.navigation.state.params.timestamp);
        this.props.navigation.state.params.selectReport(option);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}> What are you experiencing?</Text>
                </View>

                <FlatList 
                data = {reports}
                renderItem = {
                    ({item, index}) => <TouchableOpacity
                    style = {[styles.button, {backgroundColor: colors[index % colors.length]}]}
                    onPress = {() => this.onSelect(item.key)} >
                        <Text style={styles.text}> {item.key}</Text>
                    </TouchableOpacity>
                }
                />
            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3e5fc',
        paddingLeft: 15,
        paddingRight: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e88e5',
    },
    text: {
        fontSize: 22,
        fontFamily: 'Arial',
        color: 'black',
        textAlign: 'left',
        padding: 5,
    },
    questionText: {
        fontSize: 25,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        paddingTop: 30,
    }
});