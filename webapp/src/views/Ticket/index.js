import './style.scss';

import { Button, Col, Layout, Row } from 'antd';
import React,{ Component } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import icon_mobile from '../../assets/img/icon_mobile.png';
import icon_ticket from '../../assets/img/icon_ticket.png';

const { Content } = Layout;
export default class Ticket extends Component {

	constructor(props) {
		super(props);
		this.state = {
			shouldHide: true,
			isDisabled: false,
			ticket: {}
		}
	}

	onClick = () => {
		this.setState({
			shouldHide: false
		});
	}

	toggleDisable = () => {
		this.setState({ isDisabled: true })
	}

	generateTicket = () => {
		this.setState({
			ticket: {
				name: "",
				id: "",
				awaitingTime: ""
			}
		})
		this.toggleDisable();
		// TODO: Rediriger vers le splashscreen
	}


	render() {
		return (


			<Row gutter={[16,24]} justify="center">
						<Col className='card'>
							<div className='icon-container'>
								<img src={icon_mobile} alt="mobile icon" className="icon" />
							</div>
							<Button onClick={this.onClick} type="primary" style={{ width: "100%" }}>Recevoir par SMS</Button>
						</Col>
						<Col className='card'>
							<div className='icon-container'>
								<img src={icon_ticket} alt="calendar icon" className="icon" />
							</div>
							<Button onClick={this.generateTicket} disabled={this.state.isDisabled} type="primary" style={{ width: "100%" }}>Imprimer votre ticket</Button>
						</Col>
					</Row>



		)
	}
}
