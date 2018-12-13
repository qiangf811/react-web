import React, { Component } from 'react'
import { Col, Row } from 'antd'
import Iconbox from '../../../Iconbox'

export default class Service extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: "center",marginBottom:'60px',marginTop:'60px' }}>
                    <h1>我的服务与支持</h1>
                    <h6 style={{fontSize: '14px',color: '#8a8787'}}>高性能高质量系统开发</h6>
                </div>
                <Row gutter={16}>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="wechat" name="微信开发" desc="最新微信小程序、微信公众号开发，域名、服务器、功能开发到发布全程包揽！" />
                    </Col>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="apple" name="NativeApp" desc="使用ReactNative/Weex跨平台开发高性能原生应用App，安卓、苹果一套代码搞定！" />
                    </Col>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="chrome" name="WebApp" desc="使用HTML5编写的移动Web应用，一个webapp几乎可以不加修改的运行在PC/Android/iOS！" />
                    </Col>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="html5" name="企业官网" desc="采用React/Vue打造高性能企业官网定制，首屏渲染速度深度优化，极致体验！" />
                    </Col>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="dashboard" name="后台管理" desc="采用ElementUI/AntDesign高性能开发管理后台系统，使用echarts/antv打造高精度数据可视化！" />
                    </Col>
                    <Col span={8} className="service-wrapper">
                        <Iconbox type="desktop" name="桌面应用" desc="采用NW/Electron跨平台开发桌面应用，MacOS、Window一套代码搞定！" />
                    </Col>
                </Row>
            </div>
        )
    }
}
