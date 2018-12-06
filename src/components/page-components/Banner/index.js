import React, { Component } from 'react'
import { Carousel } from 'antd'
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Banner extends Component {
    constructor(){
        super()
        this.a = '1'
    }
    onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    render() {
        return (
            <div className="banner">
                <Carousel afterChange={this.onChange}>
                    <div><img src={require('../../../images/sea.jpg')} alt=""/></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}

export default CSSModules(Banner, styles)
