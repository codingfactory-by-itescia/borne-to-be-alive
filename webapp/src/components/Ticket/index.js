import './style.scss';

import { Button, Col, Row } from 'antd';
import React,{ Component } from 'react';

import {Api} from '../../services/api.js'
import icon_mobile from '../../assets/img/icon_mobile.png';
import icon_ticket from '../../assets/img/icon_ticket.png';

export default class Ticket extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isDisabled: false,
			ticket: {}
		}
	}

	componentDidMount() {
		this.setState({
			ticket: {
				name: this.props.user.name,
				id: this.props.user.id,
				awaitingTime: ""
			}
		})
	}

	click = () => {
		this.props.toggle("Sms")
	}

	toggleDisable = () => {
		this.setState({ isDisabled: true })
	}

	createTicket = async () => {
		await Api.createTicket({
			name: 'Arconte',
			surname: 'Mathilde',
			phoneNumber: '06843543',
			vitalId: '290751211221474'
		})
		this.toggleDisable()
	}

	render() {
		return (
			<Row gutter={[16,24]} justify="center">
				<Col className='card' onClick={this.click}>
					<div className='icon-container'>
						<img src={icon_mobile} alt="mobile icon" className="icon" />
					</div>
					<Button onClick={this.click} type="primary" style={{ width: "100%" }}>Recevoir par SMS</Button>
				</Col>
				<Col className='card' onClick={this.toggleDisable}>
					<div className='icon-container'>
						<img src={icon_ticket} alt="calendar icon" className="icon" />
					</div>
					<Button onClick={this.createTicket} disabled={this.state.isDisabled} type="primary" style={{ width: "100%" }}>Imprimer votre ticket</Button>
				</Col>
			</Row>
		)
	}
}
