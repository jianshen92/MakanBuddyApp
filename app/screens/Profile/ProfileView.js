import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileFieldItem from 'app/components/ProfileFieldItem';
import styles from './styles';

const defaultPhoneNumber= '123456789';
const defaultEmailAddress = 'email@domain.com';

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: defaultPhoneNumber,
            emailAddress: defaultEmailAddress,
        }
    }

    editPhoneNumber = () => {navigation.navigate('ProfileFieldItemEdit');};
    editEmail =  () => {alert('editing email');};

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ProfileFieldItem headerTitle='Phone Number' currentValue={this.state.phoneNumber}
                    onPressIcon={()=>{
                        navigation.navigate(
                            'ProfileFieldItemEdit', 
                            { currentValue: this.state.phoneNumber, headerTitle: 'Edit Phone Number' }
                        )
                    }}/>
                <ProfileFieldItem headerTitle='Email' currentValue={this.state.emailAddress}
                    onPressIcon={()=>{
                        navigation.navigate(
                            'ProfileFieldItemEdit', 
                            { currentValue: this.state.emailAddress, headerTitle: 'Edit Email' }
                        )
                    }}/>
            </View>
        );
    }
}

export default ProfileView;
