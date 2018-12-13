import React, { Component } from 'react'
import Banner from '../../components/Banner'
import Content from '../../components/Content'
import Introduce from '../../components/page-components/Home/Introduce'
import ContactMethods from '../../components/page-components/Home/ContactMethods'
import Service from '../../components/page-components/Home/Service'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            home: ''
        }
    }
    render() {
        return (
            <div>
                <Banner />
                <Content>
                    <Introduce />
                    <ContactMethods />
                    <Service />
                </Content>
            </div>
        )
    }
}
