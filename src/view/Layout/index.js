import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Home from '../Home'
import Concat from '../Concat'
import About from '../About'
import CSSModules from 'react-css-modules';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
  constructor() {
    super()
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
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
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <Link to="/">主页</Link>
                </Menu.Item>
                <Menu.Item key="product">
                  <Link to="/product">产品</Link>
                </Menu.Item>
                <Menu.Item key="mail">
                  <Link to="/mail">优品商城</Link>
                </Menu.Item>
                <Menu.Item key="suprt">
                  <Link to="/suprt">支持与服务</Link>
                </Menu.Item>
                <Menu.Item key="about">
                  <Link to="/about">关于我们</Link>
                </Menu.Item>
                <Menu.Item key="concat">
                  <Link to="/concat">联系我们</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ background: '#fff', minHeight: 280 }}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/concat" component={Concat} />
              </div>
            </Content>
          </div>
        </Router>
        <Footer style={{ textAlign: 'center' }}>
          FengYE Technology ©2018 Created by fengqiang
        </Footer>
      </Layout>
    )
  }
}
export default CSSModules(PageLayout, styles)