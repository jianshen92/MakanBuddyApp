import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';


class MoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Button onPress={()=>navigation.navigate('Profile')}>Profile</Button>
                <Button onPress={()=>navigation.navigate('MyClaims')}>MyClaims</Button>
                <Button onPress={()=>navigation.navigate('Notifications')}>Notifications</Button>
                <Button onPress={()=>navigation.navigate('Email')}>Email</Button>
                <Button onPress={()=>navigation.navigate('WebsiteLink')}>WebsiteLink</Button>
            </View>
        );
    }
}

//reducers should be combined into object (ref the egghead vid pattern)

export default MoreView;
