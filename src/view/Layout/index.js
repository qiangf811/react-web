import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from '../Home'
import Concat from '../Concat'
import About from '../About'
import CSSModules from 'react-css-modules';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class PageLayout extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
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
              <img src={require('../../images/logo.svg')} className="App-logo" alt="" />
              <Menu
                theme="light"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="mail">
                  <Link to="/">主页</Link>
                </Menu.Item>
                <Menu.Item key="app" disabled>
                  <Link to="/">公司简介</Link>
                </Menu.Item>
                <Menu.Item key="about">
                  <Link to="/about">关于</Link>
                </Menu.Item>
                <Menu.Item key="concat">
                  <Link to="/concat">联系我们</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/concat" component={Concat} />
              </div>
            </Content>
          </div>
        </Router>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
export default CSSModules(PageLayout, styles)