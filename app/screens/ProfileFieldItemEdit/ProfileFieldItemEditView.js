import React, { Component } from 'react';
import { View } from 'react-native';
import { Headline, Divider, TextInput, Button } from 'react-native-paper';
import styles from './styles';

class ProfileFieldItemEditView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const headerTitle = navigation.getParam('headerTitle', 'no header found');
        const currentValue = navigation.getParam('currentValue', 'no value found');
        return (
            <View style={styles.container}>
                <View style={styles.itemHeader}>
                    <Headline>{ headerTitle }</Headline>
                </View>
                <Divider style={styles.divider}/>
                <TextInput style={styles.text}>{ currentValue }</TextInput>
                <View style={{flexDirection:'row'}}>
                    <Button onPress={()=> navigation.navigate('Profile')}>Save</Button>
                    <Button onPress={()=> navigation.navigate('Profile')}>Cancel</Button>
                </View>
            </View>
        )
    }
}

export default ProfileFieldItemEditView;