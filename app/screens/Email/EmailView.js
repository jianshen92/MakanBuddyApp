import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class EmailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Email here</Text>
            </View>
        );
    }
}

export default EmailView;
