import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 sh-react 组件库</h1>
        <p>sh-react 是模仿antd库去设计和练习的一款UI库,针对于React的用户</p>
        <h3>安装试试</h3>
        <code>
          npm install sh-react --save
        </code>
      </>
    )
  }, { info : { disable: true }})