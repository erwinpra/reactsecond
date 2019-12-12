import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    Button,
    Alert, 
    // Platform,
} from 'react-native';
import { platform } from 'os';

class NewComponent extends Component{
    render(){
        return(
            <View>
                <Text>Hello, World!</Text>
            </View>
        )
    }
}

export default class Props extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"}}>
        
            <Text>Hello, World!</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>

            <Image
                source={require('./javalogo.png')}
                style={{ width: 193, height: 110}}>
            </Image>

            <Button
                title={ platform.OS === 'ios' ? 'IOS Button' : 'Android Button' }
                onPress={() => Alert.alert('Simple button pressed')}
                color="#f194ff">
            </Button>

            <NewComponent />

        </View>
    );
  }
}