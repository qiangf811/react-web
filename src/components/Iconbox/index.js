import React, { Component } from 'react'
import { Icon } from 'antd'
import CSSModules from 'react-css-modules'
import styles from './index.css'

class Iconbox extends Component {
  // eslint-disable-next-line
  constructor(){
    super()
  }
  render() {
    return (
      <div className="iconbox-wrapper">
        <Icon type={this.props.type} style={{ fontSize: '60px', color: '#08c' }}/>
        <div className="skills">{this.props.name}</div>
        <p className="description">{this.props.desc}</p>
      </div>
    )
  }
}

export default CSSModules(Iconbox, styles)
