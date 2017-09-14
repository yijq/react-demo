import React, { Component } from 'react';
import './Footer.css';

export default class MyFooter extends Component {
    render() {
        return (
            <span>&copy; odev {new Date().toLocaleString()} </span>
        )
    }
}
