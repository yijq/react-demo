import React, { Component } from 'react';
import MyCarousel from 'components/Carousel';
import DisplayBox from 'components/DisplayBox';
// import Nav from 'components/Nav';
import MyFooter from 'components/Footer';
import './Home.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import $ from 'jquery';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            "product1":{
                productName: "Name1",
                productDesc: "Desc"
            }
        }
    }
   
    componentDidMount() {
        this.serverRequest = $.get('http://192.168.11.228:7070/api/productInfo.json', function (result) {
          console.log(result);
          this.setState(result);
        }.bind(this));
    }

    render() {
        let data = this.state;
        let boxs = [];

        // this.state.each(function(v,i){
        //     boxs.push(<DisplayBox product={v} key={i}/>);
        // })

        for(var key in data) {
            boxs.push(<DisplayBox product={data[key]} key={key} />);
        }
              
        return (
            <div className='homeDiv'>
                <Layout>
                    
                    {/* <Header style={{backgroundColor: "#fff"}}>
                        <span style={{position:'absolute',width:'30px',height:'30px',top:'20px',left:'25px',background:'#aaa'}}>logo</span>
                        <Nav />
                    </Header> */}
                    <Layout>
                    <Content>
                        <MyCarousel />
                        {boxs}
                    </Content>
                    </Layout>
                    <Footer style={{textAlign: 'center'}}><MyFooter /></Footer>
                </Layout>
            </div>
        )
    }
}