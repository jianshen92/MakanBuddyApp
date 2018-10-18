import React, { Component } from 'react';
import MoreView from './MoreView';
import { connect } from 'react-redux';

class MoreContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MoreView {...this.props} />;
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
)(MoreContainer);
