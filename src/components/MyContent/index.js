import { Layout } from 'antd'
// import React, { Component } from 'react'
import React from 'react'

import './my-content.scss'

const { Content } = Layout

const MyContent = () => (
  <Content className="my-content">
    <div className="my-banner">
      <div className="my-description">
        <div className="my-hello-subtitle">Hello I&apos;m</div>
        <div className="my-description-title">Son Nguyen</div>
        <div className="my-description-footer">An experienced fullstack developer</div>
      </div>
      <div className="my-social-bar">
        <div className="bar" />
        <div className="my-social-icons">123</div>
      </div>
    </div>
  </Content>
)

// class MyContent extends Component {
//   render() {
//     return (
//       <Content style={{ padding: '0 50px' }}>
//         <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
//       </Content>
//     )
//   }
// }

export default MyContent
