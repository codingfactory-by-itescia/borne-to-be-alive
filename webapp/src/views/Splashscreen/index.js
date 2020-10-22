import './style.scss';

import React,{ Component } from 'react'

import { Button } from 'antd';

export default class Splashscreen extends Component {
	render() {
		return (
			<div>
				Splash
				<Button type="primary">TOTO</Button>
			</div>
		)
	}
}
