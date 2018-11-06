import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class ClaimFailed extends Component {

    render() {
        return (
            <View>
                <Text style={styles.headline}>Failed</Text>
                <Text>Some error happened!</Text>
            </View>
        );
    }
}
