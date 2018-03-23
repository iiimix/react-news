
import React from 'react';
import {Row, Col} from 'antd';
import {Menu , Icon } from 'antd';



export default class MobileHeader extends React.Component {

	constructor (){
		super();
		this.state = {selectKey : "entertainment"};
	}

	render(){
		return (
			<header>
				<img src='./src/images/logo.png' alt="logo"/>
				<span>ReactNews</span>
			</header>
		)
	}
}