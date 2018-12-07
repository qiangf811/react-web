import React, { Component } from 'react'
import { Carousel } from 'antd'
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Banner extends Component {
    constructor() {
        super()
        this.a = '1'
    }
    onChange = (a, b, c) => {
        // console.log(a, b, c);
    }
    render() {
        return (
            <div className="banner">
                <Carousel afterChange={this.onChange} >
                    <div><span className="accounting"></span></div>
                    <div><span className="brainstorming"></span></div>
                    <div><span className="apple"></span></div>
                    <div><span className="office"></span></div>
                </Carousel>
            </div>
        )
    }
}

export default CSSModules(Banner, styles)
