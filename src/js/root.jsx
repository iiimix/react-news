import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.min.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';

export default class Index extends React.Component {

	render(){
		return (
			<div>
				<MediaQuery query='(min-device-width: 1200px)'>
					<PCIndex />
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1200px)'>
					<MobileIndex />
				</MediaQuery>
			</div>
		)
	}

}

ReactDOM.render(<Index />, document.getElementById("container"));