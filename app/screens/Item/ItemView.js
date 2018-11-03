import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Title, Text, Subheading, Divider, Button } from 'react-native-paper';

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
    image: 'https://www.teamliquid.net/staff/Olli/marufp.png'
}


class ItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri : data.image}}
                />
                <View style={styles.contentContainer}>
                    <Title style={styles.title}>{data.name}</Title>
                    <Subheading>{data.restaurant}</Subheading>
                    <Text style={styles.address}>{data.address}</Text>
                    <Divider style={styles.divider}/>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailsLeft}>
                            <Text style={styles.subTitle}>Distance</Text>
                            <Text>{data.distance}</Text>
                            <Text style={styles.subTitle}>Closing Time</Text>
                            <Text>{data.closingTime}</Text>
                        </View>
                        <View style={styles.detailsRight}>
                            <Text style={styles.priceTag}>{data.price}</Text>
                            <Text>{data.stockLeft} {data.unit} left</Text>
                        </View>
                    </View>
                </View>
                <Button mode="contained" style={styles.claimButton}>Claim</Button>
            </View>
        );
    }
}

export default ItemView;
