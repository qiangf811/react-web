import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CSSModules(Content, styles)