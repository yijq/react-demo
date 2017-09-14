import React, { Component } from 'react';
// import $ from 'jquery';
import CallFromNative from 'native/CallFromNative';
import CallNative from 'native/CallNative';

export default class DisplayBox extends Component {
    componentDidMount() {
        window.CallFromNative = CallFromNative;
    }

    _CallNative(productName) {
        if(CallNative !== undefined){
            CallNative(productName);
        } else {
            console.log("CallNative need WebView");
        }

        
    }

    render() {
        let divStyle = {
            margin: "10px",
            padding: '5px',
            height: '100px',
            // width: '100%',
            display: 'flex',
            backgroundColor: '#fff',
            // overflow: 'hidden',
        }
        let imgBox = {
            float: 'left',
            height: '100%',
            width: '80px',
            backgroundColor: '#aaa'
        }
        let contentBox = {
            flex: '1',
            padding: '5px'
        }
        let textBox = {
            float: 'left',
            padding: 'px',
            width: '100%',
            height: '60px'
        }
        let btnBox = {
            width: '50px',
            height: '25px',
            float: 'right',
            backgroundColor: '#d93131',
            marginLeft: '10px'
        };

        return (
            <div style={divStyle} onClick={()=>{this._CallNative(this.props.product.productName)}}>
                <div style={imgBox}></div>
                <div style={contentBox}>
                    <div style={textBox}>
                        <h3>{this.props.product.productName}</h3>
                        <p>{this.props.product.productDesc}</p>
                    </div>
                    <div style={btnBox}>
                        button
                    </div>
                    <div style={btnBox}>
                        button
                    </div>
                </div>
            </div>
        )
    }
}