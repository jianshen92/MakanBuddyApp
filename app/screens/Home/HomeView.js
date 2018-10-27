import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import styles from './styles';

import FoodItem from 'app/components/FoodItem';

// TODO: move fetching data To ComponentDidMount or redux-saga
const data = [
    { id: 1, name: 'Salmon Don', restaurant: 'Nippon Res', price: 'SGD 10.20', distance: '5km', image: 'https://picsum.photos/700'},
    { id: 2, name: 'Blueberry Cheesecake with Chocolate Flakes', restaurant: 'ABC Res', price: 'SGD 6.20', distance: '8km', image: 'https://www.teamliquid.net/staff/Olli/marufp.png' },
    { id: 3, name: 'Terayaki Don with Miso Soup', restaurant: 'Sushi Res', price: 'SGD 15.00', distance: '9.2km', image: 'https://picsum.photos/700' },
    { id: 4, name: 'Salmon Don', restaurant: 'Nippon Res', price: 'SGD 10.20', distance: '5km', image: 'https://picsum.photos/700'},
    { id: 5, name: 'Blueberry Cheesecake with Chocolate Flakes', restaurant: 'ABC Res', price: 'SGD 6.20', distance: '8km', image: 'https://picsum.photos/700' },
    { id: 6, name: 'Terayaki Don with Miso Soup', restaurant: 'Sushi Res', price: 'SGD 15.00', distance: '9.2km', image: 'https://picsum.photos/700' },
];

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({ item }) => {
        return <FoodItem item={item} />;
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Searchbar
                    placeholder="Search"
                />
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default HomeView;
