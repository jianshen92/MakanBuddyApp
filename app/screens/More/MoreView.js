import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class MoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>More</Text>
            </View>
        );
    }
}

export default MoreView;
