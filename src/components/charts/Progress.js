import React, { Component } from 'react'
import { Progress } from 'element-react'

export default class CommonProgress extends Component {
  render() {
    return (
      <div>
        <Progress strokeWidth={18} percentage={100} status="success" textInside />
      </div>
    )
  }
}
