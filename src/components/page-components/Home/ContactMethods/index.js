import React, { Component } from 'react'
import { Col, Row, Icon } from 'antd'

export default class ContactMethods extends Component {
  constructor() {
    super()
    this.state = {
      contactInfo: {
        phone: '+86 15656024062',
        email: '1649271411@qq.com',
        address: '安徽合肥·蜀山区'
      }
    }
  }
  render() {
    return (
      <div style={style.concatWrapper}>
        <Row gutter={16} style={style.conatiner}>
          <Col span={8} style={style.iconbox}>
            <div style={style.icons}><Icon style={{ fontSize: '40px',color:'#fff' }} type="phone" /></div>
            <div>
              <div style={{ fontSize: '30px' }}>电话号码</div>
              <span className="phone">{this.state.contactInfo.phone}</span>
            </div>
          </Col>
          <Col span={8} style={style.iconbox}>
            <div style={style.icons}><Icon style={{ fontSize: '40px',color:'#fff' }} type="mail" /></div>
            <div>
              <div style={{ fontSize: '30px' }}>电子邮箱</div>
              <span className="phone">{this.state.contactInfo.email}</span>
            </div>
          </Col>
          <Col span={8} style={style.iconbox}>
            <div style={style.icons}> <Icon style={{ fontSize: '40px',color:'#fff' }} type="environment" /></div>
            <div>
              <div style={{ fontSize: '30px' }}>联系地址</div>
              <span className="phone">{this.state.contactInfo.address}</span>
            </div>
          </Col>
        </Row>
        <div style={style.concatBG}></div>
      </div>
    )
  }
}
const style = {
  concatWrapper: {
    marginTop: '100px',
    marginBottom: '100px'
  },
  conatiner: {
    position: 'relative',
    zIndex: 1
  },
  iconbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    marginRight: '8px',
    width:'90px',
    height:'90px',
    borderRadius:'50%',
    backgroundColor:'#008dff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  concatBG: {
    background: '#dcdcde',
    position: 'absolute',
    top: '1086px',
    left: 0,
    width: '100%',
    height: '200px'
  }
}