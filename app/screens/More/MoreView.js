import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProfileView from 'app/components/ProfileView';
import Notifications from 'app/components/notifications/Notifications';
import MyClaims from 'app/components/MyClaims';
import Email from 'app/components/Email';
import WebsiteLink from 'app/components/WebsiteLink';

class MoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>More</Text>
                <ProfileView/> 
                <MyClaims/>
                <Notifications/> 
                <Email/> 
                <WebsiteLink/>
            </View>
        );
    }
}

//reducers should be combined into object (ref the egghead vid pattern)

export default MoreView;
