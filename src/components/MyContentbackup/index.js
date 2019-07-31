import React, { Component } from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { Layout } from 'antd';
import MySquare from '../MySquare';

import './content.css';

const { Content } = Layout;

class MyContent extends Component {

  renderOption = (option, index) => (
    <MySquare {...option} key={index} />
  );

  render() {
    const options = [
      {
        primaryText: 'Websites',
        secondaryText: 'Full stack',
        icon: <FaLaptopCode/>,
      },
      {
        primaryText: 'Mobile Apps',
        secondaryText: 'Hybrid Applications',
        icon: <FaMobileAlt/>,
      },
      {
        primaryText: 'APIs',
        secondaryText: 'Dedicated and serverless APIs',
        icon: <FaServer/>,
      },
    ];
    return (
      <Content className="content">
        <div>What I did</div>
        <div>
          {options.map(this.renderOption)}
        </div>
      </Content>
    );
  }
}

export default MyContent;
