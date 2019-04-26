import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar} from 'react-native';
import SubmitButton from "./src/components/SubmitButton";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Navigator from "./Navigator";

export default class Indra extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
         backgroundColor="#093F61"
         barStyle="light-content" />

         <View style={styles.navbar}>
             <Text style={styles.indra_text}>
             Indian Natural DisasteR Archive {'\n'}INDRA
             </Text>
         </View>
         {/* <Flood /> */}
         <Navigator /> 
         <SubmitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
        container:
        {
            flex:1,
            backgroundColor: '#D3E4E7'
        },
        navbar:
        {
            height:55,
            backgroundColor:'#093F61',
            elevation:4
        },
        indra_text:
        {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17,
            textAlign: 'center',
            marginTop: 7,
        },

});
