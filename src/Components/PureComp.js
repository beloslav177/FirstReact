import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        console.log("Pure component render");
        return (
            <div>
                I am the pure Component {this.props.name}.
            </div>
        );
    }
}

PureComp.propTypes = {

};

export default PureComp;