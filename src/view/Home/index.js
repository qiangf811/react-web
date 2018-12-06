import React, { Component } from 'react'
import Banner from '../../components/page-components/Banner'
export default class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Banner/>
                <h1>我是主页</h1>
            </div>
        )
    }
}
