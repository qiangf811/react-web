import React, { Component } from 'react'
import Layout from './view/Layout'
// import MobileLayout from './view/Mobile/Layout'
class App extends Component {
  constructor() {
    super()
    this.state = {
      isMobile: false
    }
  }
  
  componentDidMount() {
    this.checkMobile()
  }

  checkMobile = () => {
    if ((window.navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
      this.setState({isMobile: true})
      window.location='http://120.77.158.252:5000/'
    }
  }
  render() {
    if(this.state.isMobile) {
      return <p/>
    }
    return <Layout />
  }
}
export default App
