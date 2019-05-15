import React, { useState,useEffect } from 'react'
import Content from '../../components/Content'

export default function  Count() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('我被调用了')
    document.title = `You clicked ${count} times`;
  });
  useEffect(() => {
    console.log('我是第二个useEffect，被调用了')
  });
  return (
    <Content>
        <div>
          <h1>react hook</h1>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
    </Content>
  )
}

