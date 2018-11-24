import React, { Component } from 'react';
import { Linking, View, Text } from 'react-native';
import styles from './styles';

class ContactView extends Component {
    constructor(props) {
        super(props);
    }

    followLink(url) {
        return ()=>{
            const link = url;
            Linking.canOpenURL(link).then(supported => {
                if (supported) {
                    Linking.openURL(link);
                } else {
                    alert('Oops! Couldn\'t follow the link. Please try again later');
                }
            });
        }
    }

    followEmailLink = this.followLink('mailto:email@domain.com');
    followWebsiteLink = this.followLink('https://www.google.com');

    render() {
        return (
            <View style={styles.container}>
                <Text>Contact us here:</Text>
                <Text onPress={this.followEmailLink}>email@domain.com</Text>
                <Text onPress={this.followWebsiteLink}>Site here(currently google)</Text>
            </View>
        );
    }
}

export default ContactView;
