import React, { Component } from 'react';
import ClaimView from './ClaimView';
import { connect } from 'react-redux';

class ClaimContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ClaimView {...this.props} />;
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
)(ClaimContainer);
