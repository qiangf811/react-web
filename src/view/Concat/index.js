import React, { useState, useEffect,Component } from 'react'
import Content from '../../components/Content'
import { Select } from 'antd'
const Option = Select.Option

export default class Count extends Component {
  constructor(props){
    super(props)
    this.state = {
      sex: ''
    }
  }
  handleChange = (value) => {
    this.setState({
      sex: value
    })
  }
  render() {
    return (
      <Content>
        <div>
          <h1>react hook</h1>
          <div>
            <SexSelect handleChange={this.handleChange} />
            <span>当前select的值为{this.state.sex}</span>
          </div>
        </div>
      </Content>
    )
  }
}

function SexSelect (props) {
  const [sex, setSex] = useState([])
  useEffect(() => {
    if (sex.length) return
    const sexArray = [ { name: '男', value: 'male' }, { name: '女', value: 'famale' }, { name: '人妖', value: 'famale1' } ]
    setSex(sexArray)
  })
  return (
    <Select style={{ width: 120 }} allowClear onChange={props.handleChange}>
      {sex.map((item, index) => <Option value={item.value} key={index}>{item.name}</Option>)}
    </Select>
  )
}
