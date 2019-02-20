import React, { Component } from 'react'
import Content from '../../components/Content'

export default class About extends Component {
  render() {
    const [count, setCount] = [[],[]]
    return (
      <Content>
        <div>
              <h1>ddd</h1>
          {/* <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button> */}
        </div>
      </Content>
    )
  }
}
