import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';


class MoreView extends Component {
    constructor(props) {
        super(props);
    }

    ProfileLeft = () => <List.Icon icon='folder'/>;
    MyClaimsLeft = () => <List.Icon icon='folder'/>;
    NotificationsLeft = () => <List.Icon icon='folder'/>;
    ContactLeft = () => <List.Icon icon='folder'/>;

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <List.Section>
                    <List.Item left={this.ProfileLeft} title='Profile' onPress={()=>navigation.navigate('Profile')}/>
                    <List.Item left={this.MyClaimsLeft} title='My Claims' onPress={()=>navigation.navigate('MyClaims')}/>
                    <List.Item left={this.NotificationsLeft} title='Notifications' onPress={()=>navigation.navigate('Notifications')}/>
                    <List.Item left={this.ContactLeft} title='Contact Us' onPress={()=>navigation.navigate('Contact')}/>
                </List.Section>
            </View>
        );
    }
}

//reducers should be combined into object (ref the egghead vid pattern)

export default MoreView;
