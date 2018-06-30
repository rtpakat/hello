import React, { Component } from 'react';
class SeyHello extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div>

                <h1>{this.props.name}</h1>
                <h1>อายุของคุณ {this.props.age}</h1>
            </div>
            
        );
    }
}

export default SeyHello;