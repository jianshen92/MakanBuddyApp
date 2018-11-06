import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Subheading, Divider } from 'react-native-paper';

import styles from './styles';

const data = {
    id: 2,
    name: 'Blueberry Cheesecake with Chocolate Flakes',
    restaurant: 'ABC Restaurant',
    address: '405 Clark Quay, Beduk PV, Singapore',
    price: 'SGD 6.20',
    distance: '8km',
    closingTime: '2000',
    stockLeft: '10',
    unit: 'pieces',
    image: 'https://www.teamliquid.net/staff/Olli/marufp.png',
    code: 'QBXCF'
}

export default class ClaimSuccess extends Component {

    render() {
        return (
            <View>
                <Text style={styles.headline}>Success</Text>
                <View>
                    <Text>Please present this code upon claiming</Text>
                    <Text style={styles.code}>{data.code}</Text>
                </View>
                <View>
                    <Subheading style={styles.subheading}>Item Details</Subheading>
                    <Divider/>
                    <Text>{data.name}</Text>
                    <Text>{data.price}</Text>
                </View>
                <View>
                    <Subheading style={styles.subheading}>Restaurant Details</Subheading>
                    <Divider/>
                    <Text>{data.restaurant}</Text>
                    <Text>{data.address}</Text>
                    <Text>Closing Time : {data.closingTime}</Text>
                </View>
            </View>
        );
    }
}

ClaimSuccess.propTypes = {
};