import React, { Component } from 'react';
import { YellowBox, View ,Text, StyleSheet, StatusBar} from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
import Buttons from '../../Buttons';
import SubmitButton from "../components/SubmitButton";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
         backgroundColor="#093F61"
         barStyle="light-content" />

         <View style={styles.navbar}>
             <Text style={styles.indra_text}>
             International Natural DisasteR Archive {'\n'}INDRA
             </Text>
         </View>
         <Buttons navigation={this.props.navigation} />
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
