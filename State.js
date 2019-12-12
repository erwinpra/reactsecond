import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class State extends Component {
    state = {
        namaSaya : 'Erwin',
        alamatSaya : 'Srengseng',
        status : 0
    }

    editData = () => 
        this.setState({
            namaSaya : this.state.status != 0 ? 'Rodhi' : 'Erwin',
            alamatSaya : this.state.status != 0 ? 'Palmerah' : 'Srengseng',
            status : this.state.status != 0 ? 0 : 1,
        })

    render(){
        return(
            <View
                style={{ 
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                 }}>
                
                <Text style={{ fontSize: 30 }}>State</Text>
                <Text style={{ fontSize: 30 }}>Nama: { this.state.namaSaya }</Text>
                <Text style={{ fontSize: 30 }}>Alamat: { this.state.alamatSaya }</Text>
                <Button title="Change" onPress={ this.editData }></Button>
                 
            </View>
        )
    }
}