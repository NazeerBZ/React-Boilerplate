import React from 'react';
import { connect } from 'react-redux';
import './example.css';

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

class Example extends React.Component {

    render() {

        return (
            <div>
                <p>Example</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);