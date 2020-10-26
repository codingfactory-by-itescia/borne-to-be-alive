import { Button, Input, } from 'antd';
import React, { Component } from 'react';

class Sms extends Component {
	render() {
		return (
			<div style={{ width: "600px", margin: "0 auto" }}>
				<Input className='phone-input' placeholder="Numéro de portable" style={{ width: "100%" }}/>
				<Button type="primary" style={{ width: "100%" }}>Envoyer</Button>
			</div>
		);
	}
}

export default Sms;