import React, { Component } from 'react';
import ItemView from './ItemView';
import { connect } from 'react-redux';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ItemView {...this.props} />;
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
)(ItemContainer);
