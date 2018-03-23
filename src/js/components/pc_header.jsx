
import React from 'react';
import {Row, Col} from 'antd';
import {Menu , Icon } from 'antd';
import axios from 'axios';
import $ from 'jquery';


export default class PCHeader extends React.Component {

	constructor (){
		super();
		this.state = {selectKey : "entertainment"};
	}

	componentDidMount() {
		// $.ajax({
		//     url:'/v2/movie/in_theaters',
		//     type:'POST',
		//     dataType:'json',
		//     success:function(data){
		//       console.log(data);
		//     },
		//     error:function(error){
		//       console.log(error)
		//     }
		//   })

		// 避免无限请求
		// axios.post('/v2/movie/in_theaters')
		// .then((res)=>{
		// 	console.log(res.data)
		// 	//data=res.data;
		// 	this.setState({data:"success"})
		// })
		// .catch((err)=>{
		// 	this.setState({data:"err"})
		// })
	}	

	render(){
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="src/images/logo.png" />
							<span>React News</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" selectedKeys={[this.state.selectKey]}>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="associate">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="entertainment">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="sports">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="algnology">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="inner">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="internation">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="fashion">
								<Icon type="appstore"/>时尚
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		)
	}
}