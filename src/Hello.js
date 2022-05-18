import React, { Component } from 'react';
import 'tachyons';
import './Hello.css';

class Hello extends Component{
    render() {
        return( <div>
            <h1 className='f1 tc'>Hello</h1>
            <h2>Welcome</h2>
            </div>
        )
    }
}

export default Hello;