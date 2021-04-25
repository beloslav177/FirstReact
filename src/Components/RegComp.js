import React, { Component } from 'react';

class RegComp extends Component {
    render() {
        console.log("Regular component render");
        return (
            <div>
                I am the regular Component {this.props.name}.
            </div>
        );
    }
}

export default RegComp;