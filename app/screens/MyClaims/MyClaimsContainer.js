import React, { Component } from 'react';
import MyClaimsView from './MyClaimsView';
import { connect } from 'react-redux';

const itemData1 = {
    id: 77,
    name: 'Test1',
    restaurant: 'Test1',
    address: 'Test1',
    price: 'SGD 222',
    distance: '77km',
    closingTime: 'test1',
    stockLeft: 'test1',
    unit: 'test1',
    image: 'https://www.teamliquid.net/staff/Olli/marufp.png',
    code: 'TEST1'
}

const itemData2 = {
    id: 77,
    name: 'Test1',
    restaurant: 'Test1',
    address: 'Test1',
    price: 'SGD 222',
    distance: '77km',
    closingTime: 'test1',
    stockLeft: 'test1',
    unit: 'test1',
    image: 'https://www.teamliquid.net/staff/Olli/marufp.png',
    code: 'TEST2'
}

const activeClaims = [{title:'FoodItem', navigationParams:itemData1}, {title:'FoodItem', navigationParams:itemData2}];
const claimsHistory = Array(15);
claimsHistory.fill({title:'FoodItem'});



class MyClaimsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MyClaimsView activeClaims={activeClaims} claimsHistory={claimsHistory} {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyClaimsContainer);
