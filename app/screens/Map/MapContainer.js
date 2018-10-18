import React, { Component } from 'react';
import MapView from './MapView';
import { connect } from 'react-redux';

class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MapView {...this.props} />;
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
)(MapContainer);
