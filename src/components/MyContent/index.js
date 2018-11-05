import React, { Component } from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { Layout } from 'antd';

import './content.css';

const { Content } = Layout;

class MyContent extends Component {
  render() {
    return (
      <Content className="content">
        What I did
        <div> Websites <FaLaptopCode/> Full stack</div>
        <div> Mobile Apps <FaMobileAlt/> Hybrid Applications</div>
        <div> APIs <FaServer/> Dedicated and serverless APIs</div>
      </Content>
    );
  }
}

export default MyContent;
