import React, { Component } from 'react';
import { Linking, View, Text } from 'react-native';
import styles from './styles';


//TODO: rework async stuff to match other things
//TODO: 
class WebsiteLinkView extends Component {
    constructor(props) {
        super(props);
    }

    followLink() {
        const link = 'https://www.google.com';
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                alert('Oops! Looks like our site is down. Please try again later');
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.followLink}>Site here(currently google)</Text>
            </View>
        );
    }
}

export default WebsiteLinkView;
