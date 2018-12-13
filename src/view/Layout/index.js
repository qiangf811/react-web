import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Home from '../Home'
import Concat from '../Concat'
import About from '../About'
import CSSModules from 'react-css-modules';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
   // eslint-disable-next-line
  constructor() {
    super()
  }

  render() {
    return (
      <Layout className="layout">
        <Router>
          <div>
            <Header>
              <div className="logo-wrapper">
                <img src={require('../../images/logo.svg')} className="App-logo" alt="" />
                <span style={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '46px', color: '#66dcfd' }}>枫叶科技</span>
              </div>
              <Menu
                theme="light"
                selectedKeys={[]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <NavLink to="/" exact activeClassName="menu-active">主页</NavLink>
                </Menu.Item>
                <Menu.Item key="sill">
                  <NavLink exact to="/sill" activeClassName="menu-active">个人技能</NavLink>
                </Menu.Item>
                <Menu.Item key="suprt">
                  <NavLink exact to="/suprt" activeClassName="menu-active">支持与服务</NavLink>
                </Menu.Item>
                <Menu.Item key="about">
                  <NavLink exact activeClassName="menu-active" to="/about">关于我们</NavLink>
                </Menu.Item>
                <Menu.Item key="concat">
                  <NavLink exact activeClassName="menu-active" to="/concat">联系我们</NavLink>
                </Menu.Item>
                <Menu.Item key="product">
                  <NavLink exact activeClassName="menu-active" to="/product">合作伙伴</NavLink>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              <div style={{ background: '#fff', minHeight: 280 }}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/concat" component={Concat} />
              </div>
            </Content>
          </div>
        </Router>
        <Footer style={{ textAlign: 'center' }}>
          <span>FENGYE TECH ©2018 Created width React.js by John Qiang</span>
          <p><a style={{color:'rgba(0, 0, 0, 0.65)'}} href="http://www.miitbeian.gov.cn">皖ICP备18004590号</a></p>
        </Footer>
      </Layout>
    )
  }
}
export default CSSModules(PageLayout, styles)