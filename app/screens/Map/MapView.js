import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class MapView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Map</Text>
            </View>
        );
    }
}

export default MapView;
