import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router'

const MyRouter = React.createClass({
    render() {
      return (
        <div>
        <Row>
          <Col span={12} style={{textAlign:'center'}}><Icon type="mail" />  <Link to='home'>首页</Link></Col>
          
          <Col span={12} style={{textAlign:'center'}}><Icon type="shopping-cart" /> <Link to='shop'> 商城</Link></Col>
        </Row>

        {this.props.children}
      </div>
      )
    }
  });

  export default MyRouter;