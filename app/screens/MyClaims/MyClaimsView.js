import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

//TODO: Add a list object to match notification list

class MyClaimsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MyClaims here</Text>
            </View>
        );
    }
}

export default MyClaimsView;
