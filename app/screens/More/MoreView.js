import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProfileViewPlaceholder from './ProfileViewPlaceholder';
import NotificationsPlaceholder from './NotificationsPlaceholder';
import MyClaimsPlaceholder from './MyClaimsPlaceholder';
import EmailPlaceholder from './EmailPlaceholder';
import WebsiteLinkPlaceholder from './WebsiteLinkPlaceholder';

class MoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>More</Text>
                <ProfileViewPlaceholder/>
                <MyClaimsPlaceholder/>
                <NotificationsPlaceholder/>
                <EmailPlaceholder/>
                <WebsiteLinkPlaceholder/>
            </View>
        );
    }
}

export default MoreView;
