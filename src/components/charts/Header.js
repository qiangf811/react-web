import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text header-date">
            <span>2018/11/29</span>
            <span>周五</span><span>10:08</span>
            <span>天气：晴转多云</span>
        </div>
        <div className="header-title">
            芜湖市经济开发区大数据平台
        </div>
        <div className="header-text header-notice">
            <span>【系统通知】经济开发区消防系统紧急演练</span>
            <span>11/09 11:21</span>
        </div>
      </div>
    )
  }
}
